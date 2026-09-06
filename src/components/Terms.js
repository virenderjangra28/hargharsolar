import LegalLayout, { LegalSection } from "./LegalLayout";

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="Last updated: 6 September 2026">
      <LegalSection id="acceptance" title="1. Acceptance of terms">
        <p>
          These Terms of Service govern your use of the HarGharSolar website and our rooftop
          solar consultation, survey, installation, and after-sales services. By submitting a
          lead form, booking a consultation, or using this website, you agree to these terms.
        </p>
      </LegalSection>

      <LegalSection id="services" title="2. Our services">
        <p>
          HarGharSolar helps homeowners in Haryana evaluate and install rooftop solar systems.
          We may assist with site surveys, system sizing, subsidy paperwork, installation,
          net-metering support, and service visits. Service availability can vary by city and
          DISCOM approval.
        </p>
      </LegalSection>

      <LegalSection id="consultations" title="3. Consultations and estimates">
        <p>
          Savings figures, EMI amounts, system sizes, and prices shown on the website are
          estimates only. Final cost, generation, and subsidy depend on your roof, load,
          electricity bill, module brand, structure design, and applicable government rules.
          A free site survey is required before we confirm a quotation.
        </p>
      </LegalSection>

      <LegalSection id="subsidy" title="4. Subsidy and EMI">
        <p>
          Government subsidy and loan or EMI options are subject to eligibility, bank or NBFC
          approval, and current policy. HarGharSolar does not guarantee that a subsidy or loan
          will be sanctioned. We support the paperwork process but are not responsible for
          delays or decisions by government portals, DISCOMs, or lenders.
        </p>
      </LegalSection>

      <LegalSection id="obligations" title="5. Your responsibilities">
        <p>
          You agree to share accurate name, WhatsApp number, PIN code, and bill details, and to
          provide safe roof access for survey and installation. You are responsible for
          obtaining any society, owner, or building permissions required for the installation.
        </p>
      </LegalSection>

      <LegalSection id="cancellation" title="6. Cancellation policy">
        <p>
          You may cancel a free consultation at any time before the site survey. After a paid
          booking or work order is confirmed, cancellation and refund terms will be stated on
          your quotation or work order. Custom structures, procured material, or work already
          completed may be charged on a pro-rata basis.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="7. Limitation of liability">
        <p>
          To the extent permitted by law, HarGharSolar is not liable for indirect or
          consequential losses, including estimated bill savings that differ from actual
          generation. Product warranties follow the relevant manufacturer terms. Our
          installation warranty, if any, will be set out in your work order.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="8. Changes">
        <p>
          We may update these terms from time to time. The revised version will be posted on
          this page with an updated date. Continued use of the website after a change means you
          accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="9. Contact">
        <p>
          For questions about these terms, write to us through the consultation form on the
          website or ask our team during your site visit.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
