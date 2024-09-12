// import clsx from 'clsx';
// import Heading from '@theme/Heading';
// import styles from './styles.module.css';

// type FeatureItem = {
//   title: string;
//   Svg: React.ComponentType<React.ComponentProps<'svg'>>;
//   description: JSX.Element;
// };

// const FeatureList: FeatureItem[] = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({title, Svg, description}: FeatureItem) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures(): JSX.Element {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
    title: 'Aprendizaje Práctico',
    Svg: require('@site/static/intro/aprendizaje-practico-svg.svg').default,
    description: (
      <>
        Experimenta con las tecnologías electrónicas más modernas de forma práctica 
        y construye tus propios proyectos desde cero.
      </>
    ),
  },
  {
    title: 'Modularidad y Flexibilidad',
    Svg: require('@site/static/intro/modularidad-flexibilidad-svg.svg').default,
    description: (
      <>
        Combina diferentes módulos para crear proyectos personalizados. La plataforma 
        te permite adaptar las configuraciones a tus necesidades.
      </>
    ),
  },
  {
    title: 'Software de Desarrollo Completo',
    Svg: require('@site/static/intro/software-desarrollo-completo-svg.svg').default,
    description: (
      <>
        Programa tus proyectos con diferentes lenguajes y entornos de desarrollo 
        integrados (IDE) que te guían paso a paso.
      </>
    ),
  },
  {
    title: 'Documentación Detallada',
    Svg: require('@site/static/intro/documentacion-detallada-svg.svg').default,
    description: (
      <>
        Accede a diagramas, ejemplos de código, tutoriales y guías completas 
        para cada módulo y proyecto.
      </>
    ),
  },
  {
    title: 'Conectividad y Control',
    Svg: require('@site/static/intro/conectividad-control-svg.svg').default,
    description: (
      <>
        Integra sensores, motores, displays y otros componentes para crear 
        sistemas inteligentes y automatizados.
      </>
    ),
  },
  {
    title: 'Comunidad y Soporte',
    Svg: require('@site/static/intro/comunidad-soporte-svg.svg').default,
    description: (
      <>
        Forma parte de una comunidad activa de desarrolladores y entusiastas. 
        Obtén ayuda, comparte proyectos y colabora en nuevas ideas.
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
