import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "56e2d9974ff438",
    pass: "778d06fbffd21a",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Pinheiro <pinheiro@gmail.com>",
      to: "Paulo Pinheiro <pinheiro@pinheiro.com",
      subject,
      html: body,
    });
  }
}
