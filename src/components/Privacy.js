import LegalLayout, { LegalSection } from "./LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="Last updated: 6 September 2026">
      <LegalSection id="collect" title="1. Information we collect">
        <p>
          When you book a consultation or talk to an expert, we may collect your full name,
          WhatsApp number, monthly electricity bill range, PIN code, city, and any message you
          send us. We may also collect basic website usage data such as pages viewed and device
          type.
        </p>
      </LegalSection>

      <LegalSection id="use" title="2. How we use your information">
        <p>
          We use this information to contact you about rooftop solar, schedule surveys, prepare
          estimates, assist with subsidy paperwork, and improve our website. We may send
          service updates on WhatsApp or phone if you have agreed to receive them.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="3. Sharing">
        <p>
          We do not sell your personal information. We may share details with installation
          partners, DISCOM or subsidy portals, and lenders only as needed to deliver the
          service you requested. We may also share information if required by law.
        </p>
      </LegalSection>

      <LegalSection id="storage" title="4. Storage and security">
        <p>
          We keep enquiry data for as long as needed to complete your consultation, installation,
          or after-sales support, or as required by law. We take reasonable steps to protect
          your information, but no website transmission is completely secure.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="5. Your choices">
        <p>
          You can ask us to update or delete your enquiry details, or stop WhatsApp updates, by
          contacting our team. If you withdraw consent, we may not be able to continue a
          consultation that depends on that information.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="6. Cookies">
        <p>
          The website may use essential cookies or similar tools to keep the site working and
          to understand how pages are used. You can control cookies through your browser
          settings.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="7. Contact">
        <p>
          For privacy requests, use the consultation form on the website or speak with a
          HarGharSolar representative during your visit.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
