import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) throw new Error('CLERK_WEBHOOK_SECRET missing');

  const headerPayload = await headers();
  const svixId = headerPayload.get('svix-id');
  const svixSignature = headerPayload.get('svix-signature');
  const svixTimestamp = headerPayload.get('svix-timestamp');

  if (!svixId || !svixSignature || !svixTimestamp) {
    return NextResponse.json(
      { error: 'Missing svix headers' },
      { status: 400 }
    );
  }

  const payload = await req.json();
  const wh = new Webhook(WEBHOOK_SECRET);

  try {
    const evt = wh.verify(JSON.stringify(payload), {
      'svix-id': svixId,
      'svix-signature': svixSignature,
      'svix-timestamp': svixTimestamp,
    }) as any;

    // Handle user creation
    if (evt.type === 'user.created') {
      await prisma.user.create({
        data: {
          clerkId: evt.data.id,
          email: evt.data.email_addresses[0].email_address,
          name: `${evt.data.first_name || ''} ${
            evt.data.last_name || ''
          }`.trim(),
          stripeId: null,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json({ error: 'Invalid webhook' }, { status: 400 });
  }
}
