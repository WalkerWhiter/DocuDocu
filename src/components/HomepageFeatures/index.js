import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
 
  {
    title: 'La Vida es Hermosa',
    
    description: (
      <>
        A veces solo hay que mirar al cielo, respirar profundo y sonreír 🌿.  
        La vida está llena de momentos mágicos que merecen ser disfrutados.
      </>
    ),
  },

  {
    title: 'No te rindas',
    
    description: (
      <>
        Solo tienes que tomarte un tiempo para poder respirar y todo estara bien, Dios no te da peleas que no puedas ganar.
      </>
    ),
  },

  {
    title: 'Eres la mas bella creacion',
    
    description: (
      <>
        Si alguien te dice que no vales la pena o que eres feo, no les hagas caso porque tu eres el mas grande milagro de la creacion.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
