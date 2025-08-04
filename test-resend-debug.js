const { Resend } = require('resend');

const resend = new Resend('re_fbKJnJjp_B3nz6db5LYaJm3N8yYmMDWMA');

async function testResend() {
  try {
    console.log('Testing Resend API...');
    
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['dinusanth.s@gmail.com'],
      subject: 'Test Email from Portfolio',
      html: '<p>This is a test email to verify Resend is working.</p>',
    });
    
    console.log('✅ Success:', result);
  } catch (error) {
    console.error('❌ Error:', error);
    console.error('Error details:', {
      message: error.message,
      statusCode: error.statusCode,
      code: error.code
    });
  }
}

testResend(); 