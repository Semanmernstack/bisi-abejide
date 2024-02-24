import client from '@mailchimp/mailchimp_marketing';


client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request: Request) {
    const {email} = await request.json()

    if(!email) return

    const res = await client.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      { email_address: email, status: "subscribed"  }
    )
    return new  Response(
      JSON.stringify({ res })
     )
     
}
