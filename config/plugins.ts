import type { Core } from "@strapi/strapi";

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  email: {
    config: {
      provider: "@strapi/provider-email-nodemailer",
      providerOptions: {
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "abigayle.schamberger32@ethereal.email",
          pass: "sCfXrGtFBRMgXavZp9",
        },
      },
      settings: {
        defaultFrom: "test@ethereal.email",
        defaultReplyTo: "test@ethereal.email",
      },
    },
  },
});

export default config;
