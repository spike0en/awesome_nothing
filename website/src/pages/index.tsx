import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { JSX } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.glyphGrid} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroContent}>
          <img src="img/logo.png" alt="Awesome Nothing" className={styles.heroLogo} />
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={clsx('button', styles.ctaButton)} to="/docs/intro">
              Explore Resources
            </Link>
          </div>
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

function Feature({ title, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <Link to={link} className={styles.featureLink}>
        <div className={styles.featureCard}>
          <span className={styles.featureDot} />
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDesc}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionLabel}>Resources</Heading>
        <div className={clsx('row', styles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageSocials() {
  const links = [
    { label: 'Telegram', href: 'https://t.me/s/Nothing_Archive' },
    { label: 'Community', href: 'https://nothing.community' },
    { label: 'Discord', href: 'https://discord.com/invite/nothingtech' },
    { label: 'Reddit', href: 'https://www.reddit.com/r/NothingTech' },
    { label: 'XDA', href: 'https://xdaforums.com/c/nothing.12583/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@NothingTechnology' },
    { label: 'X', href: 'https://x.com/nothing' },
    { label: 'Instagram', href: 'https://instagram.com/nothing' },
    { label: 'NothingOSS', href: 'https://github.com/NothingOSS' },
  ];
  return (
    <section className={styles.socials}>
      <div className="container">
        <Heading as="h2" className={styles.sectionLabel}>Connect</Heading>
        <div className={styles.socialLinks}>
          {links.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
        <HomepageSocials />
      </main>
    </Layout>
  );
}
