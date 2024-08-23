import React from "react";

export default function ShadowContent() {
  /* eslint-disable react/no-unescaped-entities */
  return (
    <div className="flex flex-col gap-8 mt-16 w-1/2 mx-auto">
      <div>
        <h4 className="text-xl font-semibold mb-2">Terms & Conditions:</h4>
        <p className="mb-4">
          Welcome to OFFTO. The OFFTO Platform allows you to book hotels and
          other travel-related services from third-party service providers{" "}
          <strong>(Travel Partners)</strong>. These Terms of Use, the{" "}
          <strong>Terms,</strong> constitute a legally binding agreement between
          you, whether an individual or an entity, and OFFTO, a Kuwait-based
          corporation <strong>(OFFTO, we,</strong> or <strong>us),</strong>{" "}
          regarding your usage of the OFFTO Platform and the services accessible
          through it, collectively referred to as the{" "}
          <strong>OFFTO Platform.</strong>
        </p>
        <p className="mb-4">
          The terms <strong>you</strong> and <strong>your</strong> pertain to
          users who visit the OFFTO Platform and/or book reservations through
          it. Prior to using the OFFTO Platform, please carefully read these{" "}
          <strong>Terms</strong> and the Privacy Policy. Accessing or using the
          OFFTO Platform in any way, including booking hotels and other travel
          products or services, signifies your understanding of, and consent to
          be bound by, these <strong>Terms</strong> and the Privacy Policy. If
          you do not agree with these <strong>Terms</strong> at any point,
          please terminate your usage of the OFFTO Platform immediately.
        </p>
      </div>
      <div>
        <h5 className="text-xl font-semibold mb-2">General:</h5>
        <ul className="list-disc pl-6 mb-4">
          <li>
            All payments will be charged in Kuwait Dinars. Other currencies are
            for reference only.
          </li>
          <li>
            All changes must be made at least 4 days before the departure date.
          </li>
          <li>
            All changes or cancellations will be subject to the rules and
            penalties of hotels and airlines.
          </li>
          <li>
            Our responsibilities include advising you about the services
            available, acting as an intermediary between you and the service
            provider, ensuring all parties have relevant information, and
            confirming agreements about the service.
          </li>
          <li>
            We are not responsible for the operation of third-party services.
          </li>
        </ul>
        <h5 className="text-xl font-semibold mb-2">Travel Requirements:</h5>
        <ul className="list-disc pl-6 mb-4">
          <li>
            If you are traveling to a destination requiring a visa, it is your
            responsibility to obtain the visa; OFFTO is not responsible for visa
            requirements, and any denied boarding will not be refunded.
          </li>
          <li>
            Ensure that your passport is valid and meets the country's
            requirements for international travel. For information on passport,
            visa, and other travel requirements, consult the embassy of the
            destination country.
          </li>
          <li>
            Travel, health, and other required insurance policies are the
            passenger's responsibility; OFFTO cannot assist in this process.
          </li>
        </ul>
        <h5 className="text-xl font-semibold mb-2">
          Airline Booking Cancellation/Amendment:
        </h5>
        <ul className="list-disc pl-6 mb-4">
          <li>
            We will issue flight tickets only upon receiving cleared funds.
          </li>
          <li>
            Special requests (e.g., meals, disabled facilities, child seats) are
            not guaranteed and are subject to airline procedures.
          </li>
          <li>
            Cancellation and amendment requests can be sent via email to{" "}
            <strong>care@offto.com.kw</strong> or WhatsApp to{" "}
            <strong>+96522257225</strong> or <strong>+96522257224,</strong>{" "}
            including your reference number and full name.
          </li>
          <li>
            Passengers should check in at least three (3) hours before flight
            departure.
          </li>
          <li>Comply with required documents and visas.</li>
          <li>Charges for changes may vary by flight and booking class.</li>
          <li>
            Certain airlines may not allow changes close to the travel time,
            which may result in a <strong>"No Show"</strong> and no refund.
          </li>
        </ul>
        <h5 className="text-xl font-semibold mb-2">
          Hotel Booking Cancellation/Amendment:
        </h5>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Upon completing your booking, you will receive a confirmation email
            with a booking number, establishing the contract for the ordered
            products and services.
          </li>
          <li>
            You may receive two booking confirmations for various services
            (flights, hotel transfers, and activities).
          </li>
          <li>
            In unforeseen events, overbookings, pricing errors, or hotel
            closures, OFFTO reserves the right to replace hotels with equal or
            superior star ratings when necessary. Most changes are minor, but
            major changes such as hotel closures or overbookings may occur. A
            change to accommodation of the same or higher standards does not
            constitute a major change.
          </li>
        </ul>
      </div>
    </div>
  );
}
