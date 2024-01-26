import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Command Line Interface',
    Svg: require('@site/static/img/undraw_post_re_mtr4.svg').default,
    description: (
      <>
          Tapper Provide an Interface for All Android Debug Bridge Commands That you need
          In your Android Development Journey, No Need to Save Them in Notes, Search on Internet,
          Also Tapper Can Execute Testing Scenarios, Monkey Testing, Powered By Npm
      </>
    ),
  },
  {
    title: 'Desktop Clients',
    Svg: require('@site/static/img/undraw_progressive_app_m-9-ms.svg').default,
    description: (
      <>
          Tapper Provide A User Interface for Using The Commands, no need to open the Terminal,
          You can Access Everything from a Drop Down Menu with Input Section To Write Your Information,
          Also You can Create Commands By Registering Your Application Package Name
      </>
    ),
  },
  {
    title: 'Test Scenarios',
    Svg: require('@site/static/img/undraw_android_jr64.svg').default,
    description: (
      <>
          No need To Save the Input, or Repeat the Same Steps Again and Again,
          Tapper Can Save All of your Commands and Execute them When you Need in a Sequence,
          for Example Tapper Can Pass Your App Flow with Coordinates Clicks Automated
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
