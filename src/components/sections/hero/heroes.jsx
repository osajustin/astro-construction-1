import HeroSimpleCentered from './simple-centered';
import HeroSimpleCenteredBackgroundImage from './simple-centered-with-bg-image';
import HeroSplitScreenshot from './split-with-screenshot';
import HeroSplitScreenshotDark from './split-with-screenshot-on-dark';
import HeroSplitWithCode from './split-wtih-code-example';
import HeroSplitWithImage from './split-with-image';
import HeroWithAngledImageOnRight from './with-angled-image-on-right';
import HeroWithAppScreenshot from './with-app-screenshot';
import HeroWithAppScreenshotDark from './with-app-screenshot-on-dark';
import HeroWithImageTiles from './with-image-tiles';
import HeroWithOffsetImage from './with-offset-image';
import HeroWithPhoneMockup from './with-phone-mockup';

// Add all components to a list
const heroComponents = [
  HeroSimpleCentered,
  HeroSimpleCenteredBackgroundImage,
  HeroSplitScreenshot,
  HeroSplitScreenshotDark,
  HeroSplitWithCode,
  HeroSplitWithImage,
  HeroWithAngledImageOnRight,
  HeroWithAppScreenshot,
  HeroWithAppScreenshotDark,
  HeroWithImageTiles,
  HeroWithOffsetImage,
  HeroWithPhoneMockup,
];

export default function Heroes() {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow">
      <ul role="list" className="space-y-3">
      {heroComponents.map((Component, index) => (
        <li
          key={index}
          className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6"
        >
          <Component />
        </li>
      ))}
    </ul>
    </div>
  );
}