import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy - Your Data Protection and Security Information"
        description="Read Luqman Graphics privacy policy to understand how we collect, use, and protect your personal data. Learn about our commitment to your privacy, data security, cookies usage, and your rights under GDPR and data protection laws."
        keywords="privacy policy, data protection, GDPR compliance, personal information security, cookie policy"
        canonical="/privacy"
      />
      <Header />

      <main className="pt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">

          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 11, 2024
            </p>
          </div>

          {/* Content */}
          <div className="glass-card p-8 md:p-12 rounded-2xl animate-slide-up">
            <div className="prose prose-invert max-w-none">

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Welcome to Luqman Graphics ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use our service and tells you about your privacy rights and how the law protects you.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We use your personal data to provide and improve the service. By using the service, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Definitions</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  For the purposes of this Privacy Policy:
                </p>
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Company</strong> refers to Luqman, located at Jayanagar, Dharwad, 580001 India.
                    </p>
                  </div>
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Service</strong> refers to the Website accessible from <span className="text-primary">https://www.luqman.co.in/</span>
                    </p>
                  </div>
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Personal Data</strong> is any information that relates to an identified or identifiable individual.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Personal Data</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Usage Data</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Usage Data</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Usage Data is collected automatically when using the Service. This may include information such as:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Your device's Internet Protocol address (IP address)</li>
                      <li>Browser type and version</li>
                      <li>Pages of our service that you visit</li>
                      <li>Time and date of your visit</li>
                      <li>Time spent on pages</li>
                      <li>Unique device identifiers and diagnostic data</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Tracking Technologies and Cookies</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our service and store certain information. Technologies used include:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Types of Cookies We Use</h3>

                    <div className="space-y-4">
                      <div className="glass-card p-4 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">Necessary/Essential Cookies</h4>
                        <p className="text-sm text-muted-foreground mb-2">Type: Session Cookies</p>
                        <p className="text-sm text-muted-foreground">
                          These cookies are essential to provide you with services available through the website and to enable you to use some of its features. Without these cookies, the services you have asked for cannot be provided.
                        </p>
                      </div>

                      <div className="glass-card p-4 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">Functionality Cookies</h4>
                        <p className="text-sm text-muted-foreground mb-2">Type: Persistent Cookies</p>
                        <p className="text-sm text-muted-foreground">
                          These cookies allow us to remember choices you make when you use the website, such as remembering your login details or language preference.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Personal Data</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Company may use Personal Data for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>To provide and maintain our service, including monitoring usage</li>
                  <li>To manage your account and registration as a user</li>
                  <li>For the performance of contracts and purchase agreements</li>
                  <li>To contact you via email, telephone, SMS or other electronic communication</li>
                  <li>To provide you with news, special offers and general information about similar services</li>
                  <li>To manage your requests and inquiries</li>
                  <li>For business transfers, data analysis, and service improvement</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We may share your personal information in the following situations:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>With Service Providers to monitor and analyze use of our service</li>
                  <li>For business transfers during mergers, acquisitions or asset sales</li>
                  <li>With affiliates, requiring them to honor this Privacy Policy</li>
                  <li>With business partners to offer certain products or services</li>
                  <li>With your consent for any other purpose</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Company will retain your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to comply with legal obligations, resolve disputes, and enforce our agreements and policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  You have the right to delete or request that we assist in deleting the Personal Data we have collected about you. You may:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Update, amend, or delete your information through your account settings</li>
                  <li>Contact us to request access to, correct, or delete personal information</li>
                  <li>Request data portability and restriction of processing</li>
                </ul>
                <div className="glass-card p-4 rounded-lg bg-blue-500/10 border-blue-500/20 mt-4">
                  <p className="text-blue-200 text-sm">
                    <strong>Note:</strong> We may need to retain certain information when we have a legal obligation or lawful basis to do so.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The security of your Personal Data is important to us, but remember that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from anyone under 13 without parental consent verification, we take steps to remove that information from our servers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Links to Other Websites</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service may contain links to other websites not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You will be notified via email and/or a prominent notice on our Service prior to the change becoming effective.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, you can contact us:
                </p>
                <div className="mt-4 glass-card p-4 rounded-lg">
                  <p className="text-foreground font-medium">Luqman Kittur</p>
                  <p className="text-muted-foreground">Location: Jayanagar, Dharwad, 580001 India</p>
                  <p className="text-muted-foreground">Email: <span className="text-primary">kitturluqman007@gmail.com</span></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;