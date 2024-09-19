import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import cityImg from '../assets/city.jpg';
import heroImg from '../assets/hero.png';

export default function WelcomePage() {
  // No of pixels user scrolled
  const {scrollY} = useScroll();

  const opacityCity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);
  // [0, 200, 300, 500] -> array of breakpoints. Start at 0 px i.e no scolling, then scroll 200 px and so on.
  // [1, 0.5, 0.5, 0] -> opacity value mapped for each px breakpoint
  // It does not re-render the entire component everytime user scrolls. Thus animate won't work here. We'll use another prop called style.

  const yCity = useTransform(scrollY, [0, 200, 300, 500], [0, -50, -100, -150]);
  // 2nd array -> Position of y axis

  const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
  const yHero = useTransform(scrollY, [0, 200, 300, 500], [0, -70, -130, -180]);

  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);

  return (
    <>
      <header id="welcome-header">
        <motion.div id="welcome-header-content" style={{y: yText, scale}}>
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{opacity: opacityCity, y: yCity}}
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        <motion.img style={{opacity: opacityHero, y: yHero}} src={heroImg} alt="A superhero wearing a cape" id="hero-image" />
      </header>
      <main id="welcome-content">
        <section>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
        </section>
      </main>
    </>
  );
}
