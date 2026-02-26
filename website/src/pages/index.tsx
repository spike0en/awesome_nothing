import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img src="img/logo.png" alt="Awesome Nothing" className={styles.heroLogo} />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Explore Resources
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/spike0en/awesome_nothing"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  description: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Devices',
    description: 'Complete catalog of Nothing & CMF phones, earbuds, watches, and accessories.',
    link: '/docs/devices',
  },
  {
    title: 'Community Apps',
    description: 'Glyph-powered apps, productivity tools, and utilities built by the community.',
    link: '/docs/apps',
  },
  {
    title: 'Projects',
    description: 'Glyph tools, Matrix toys, modules, and other community projects.',
    link: '/docs/projects',
  },
  {
    title: 'Official Resources',
    description: 'Apps, wallpapers, fonts, kernel sources, and developer SDKs from Nothing.',
    link: '/docs/official',
  },
  {
    title: 'Photography',
    description: 'GCAM ports, configs, and camera presets for Nothing devices.',
    link: '/docs/photography',
  },
  {
    title: 'Guides',
    description: 'Step-by-step guides for bootloader, rooting, and device customization.',
    link: '/docs/guides',
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
        <div className={styles.featureCard}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageSocials() {
  return (
    <section className={styles.socials}>
      <div className="container">
        <Heading as="h2" className={styles.socialsTitle}>
          Connect with the Community
        </Heading>
        <div className={styles.socialLinks}>
          <a href="https://nothing.community" target="_blank" rel="noopener noreferrer">
            Nothing Community
          </a>
          <a href="https://discord.com/invite/nothingtech" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <a href="https://www.reddit.com/r/NothingTech" target="_blank" rel="noopener noreferrer">
            Reddit
          </a>
          <a href="https://xdaforums.com/c/nothing.12583/" target="_blank" rel="noopener noreferrer">
            XDA Forums
          </a>
          <a href="https://t.me/s/nothing_archive" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSocials />
      </main>
    </Layout>
  );
}
