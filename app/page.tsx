import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="container px-12 py-8 gap-y-4 flex flex-col">
      <h1 className="font-[1.8rem]">User Data Usage Policy</h1>
      <p>
        <strong>Effective Date: 08/30/2023</strong>
      </p>
      <Header />
      <h2 className="font-bold">1. Information We Collect:</h2>
      <p>
        When you register and log in to our App, we may collect the following
        information:
      </p>

      <ul>
        <li>
          <strong>Basic Information:</strong> Your name, email address, phone number, and
          username.
        </li>
        <li>
          <strong>Authentication Data:</strong> Encrypted passwords and
          authentication tokens for secure login.
        </li>
        <li>
          <strong>Device Information:</strong> Information about the device you
          use to access the App, such as device type, operating system, and
          browser.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you interact with
          the App, including pages visited, actions taken, and features used.
        </li>
        <li>
          <strong>IP Address:</strong> Your IP address for security and
          analytics purposes.
        </li>
      </ul>

      <h2 className="font-bold">2. How We Use Your Information:</h2>

      <p>We use the collected information for the following purposes:</p>

      <ul>
        <li>
          <strong>User Authentication:</strong> To verify your identity and
          provide secure access to the App.
        </li>
        <li>
          <strong>Personalization:</strong> To personalize your experience and
          provide relevant content and features.
        </li>
        <li>
          <strong>Analytics:</strong>{" "}
          {
            "To analyze usage patterns, troubleshoot issues, and improve the App's performance."
          }
        </li>
        <li>
          <strong>Communication:</strong> To send important updates,
          notifications, and responses to your inquiries.
        </li>
        <li>
          <strong>Legal Compliance:</strong> To comply with applicable laws,
          regulations, and legal requests.
        </li>
      </ul>

      <h2 className="font-bold">3. Data Security:</h2>

      <p>
        We take data security seriously and implement appropriate measures to
        safeguard your information. However, please note that no method of
        transmission over the internet or electronic storage is completely
        secure. While we strive to protect your personal data, we cannot
        guarantee its absolute security.
      </p>

      <h2 className="font-bold">4. Data Sharing:</h2>

      <p>
        We do not sell, trade, or share your personal information with third
        parties for marketing purposes. However, we may share your information
        with:
      </p>

      <ul>
        <li>
          <strong>Service Providers:</strong> Third-party service providers who
          assist us in operating the App and providing services to you (e.g.,
          hosting, analytics, customer support).
        </li>
        <li>
          <strong>Legal Requirements:</strong> When required by law or in
          response to valid legal requests, we may disclose your information.
        </li>
      </ul>

      <h2 className="font-bold">5. Your Choices:</h2>

      <p>You have the right to:</p>

      <ul>
        <li>
          <strong>Access:</strong> Request access to the personal information we
          hold about you.
        </li>
        <li>
          <strong>Correction:</strong> Request corrections to your personal
          information.
        </li>
        <li>
          <strong>Deletion:</strong> Request the deletion of your personal
          information, subject to legal obligations.
        </li>
      </ul>

      <h2 className="font-bold">6. Changes to this Policy:</h2>

      <p>
        We may update this User Data Usage Policy from time to time. The revised
        policy will be effective immediately upon posting. We encourage you to
        review this policy periodically to stay informed about how we are using
        and protecting your information.
      </p>

      <h2 className="font-bold">7. Contact Us:</h2>

      <p>
        If you have any questions, concerns, or requests regarding your personal
        information or this policy, please contact us at{" "}
        <a href="mailto:tsiresymila@gmail.com">tsiresymila@gmail.com</a>.
      </p>

      <Footer />

      <p>
        Tsiresy Milà
        <br />
        Antananarivo Madagascar
        <br />
        Antananarivo 101 Madagascar
        <br />
        tsiresymila@mail.com
        <br />
        +261342083574
      </p>

      <p>
        <strong>Date of Last Update: 08/30/2023</strong>
      </p>
    </main>
  );
}
