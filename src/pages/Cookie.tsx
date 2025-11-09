import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Cookie = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cookie Policy - Understanding How We Use Cookies on Our Website"
        description="Learn about the cookies we use on Luqman Graphics website, including analytics cookies, preference cookies, and third-party cookies from Google Analytics and AdSense. Understand how to manage and disable cookies in your browser settings."
        keywords="cookie policy, website cookies, Google Analytics cookies, AdSense cookies, browser privacy"
        canonical="/cookie"
      />
      <Header />

      <main className="pt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">

          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 12, 2025
            </p>
          </div>

          {/* Content */}
          <div className="glass-card p-8 md:p-12 rounded-2xl animate-slide-up">
            <div className="prose prose-invert max-w-none">

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer to improve your experience. This Cookie Policy describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, however this may downgrade or 'break' certain elements of the site's functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Disabling Cookies</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site.
                </p>
                <div className="glass-card p-4 rounded-lg bg-amber-500/10 border-amber-500/20">
                  <p className="text-amber-200 text-sm">
                    <strong>Important:</strong> It is recommended that you do not disable cookies as they are essential for providing you with the best experience on our website.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">The Cookies We Set</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Luqman Graphics uses various types of cookies to enhance your browsing experience:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Site Preferences Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
                    </p>
                    <div className="mt-3 glass-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Examples:</strong> Theme settings, language preferences, display options
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Third Party Cookies</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Google Analytics</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This site uses Google Analytics, which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                    </p>
                    <div className="mt-3 glass-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        For more information on Google Analytics cookies, see the official Google Analytics page.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Google AdSense</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.
                    </p>
                    <div className="mt-3 glass-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        For more information on Google AdSense, see the official Google AdSense privacy FAQ.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">More Information</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Hopefully that has clarified things for you, and as was previously mentioned, if there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For more general information on cookies, please read our comprehensive Cookies Policy article.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you are still looking for more information or have questions about our cookie usage, you can contact us through one of our preferred contact methods:
                </p>
                <div className="mt-4 glass-card p-4 rounded-lg">
                  <p className="text-foreground font-medium">Luqman Kittur</p>
                  <p className="text-muted-foreground">Email: kitturluqman007@gmail.com</p>
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

export default Cookie;