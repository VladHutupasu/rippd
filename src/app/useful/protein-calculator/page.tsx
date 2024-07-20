import BlogImage from '@public/images/blog/protein-calculator.png';
import BlogPost from '@shared/BlogPost';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const ProteinCalculator = dynamic(() => import('@features/ProteinCalculator'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Protein Calculator',
  description:
    'Use our free protein intake calculator to determine your daily protein needs. Achieve your fitness goals with a personalized high-protein diet plan tailored to your lifestyle and health goals.',
  keywords: [
    'protein calculator',
    'calculate protein needs',
    'high-protein diet',
    'fitness nutrition',
    'Rippd protein calculator',
  ],
  alternates: {
    canonical: 'https://rippd.io/useful/protein-calculator',
  },
};

export default function ProteinCalculatorTool() {
  return (
    <BlogPost title="Protein Calculator" image={BlogImage}>
      <div>
        <h2>Why Protein Matters</h2>
        <p>
          Protein is an essential nutrient that plays a key role in building and repairing tissues, as well as
          supporting immune function and metabolism. Whether you&apos;re looking to build muscle, manage weight, or
          simply stay healthy, getting enough protein is crucial. You can read here more about{' '}
          <Link href={'/blog/why-is-protein-important'}>Why is Protein important</Link>.
        </p>

        <ProteinCalculator />

        <h3>Protein-Rich Foods 💪</h3>
        <p>Here are some great sources of protein to incorporate into your meals:</p>
        <ul>
          <li>
            <strong>Lean meats</strong>: chicken breast, turkey breast, lean beef
          </li>
          <li>
            <strong>Fatty fish</strong>: salmon, tuna, mackerel
          </li>
          <li>
            <strong>Eggs</strong>: whole eggs, egg whites
          </li>
          <li>
            <strong>Dairy</strong>: Greek yogurt, cottage cheese, milk
          </li>
          <li>
            <strong>Plant-based proteins</strong>: tofu, tempeh, lentils, chickpeas
          </li>
          <li>
            <strong>Nuts and seeds</strong>: almonds, peanuts, chia seeds, hemp seeds
          </li>
          <li>
            <strong>Quinoa and other whole grains</strong>
          </li>
          <li>
            <strong>Protein-rich vegetables</strong>: spinach, broccoli, Brussels sprouts
          </li>
          <li>
            <strong>Protein supplements</strong>: whey protein, plant-based protein powders
          </li>
          <li>
            <strong>Seafood</strong>: shrimp, scallops, crab
          </li>
        </ul>

        <p>
          Incorporating these protein-rich foods into your diet can help you meet your daily protein needs and support
          your fitness goals.
        </p>

        <p>
          👉&nbsp;
          <Link href={`/blog/pantry-must-haves`}>Check out our post about Pantry Must-Haves: High Protein Foods</Link>
        </p>
      </div>
    </BlogPost>
  );
}
