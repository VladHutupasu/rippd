import ProteinCalculator from '@features/ProteinCalculator';
import BlogImage from '@public/images/blog/protein-calculator.png';
import BlogPost from '@shared/BlogPost';
import Link from 'next/link';

export default function ProteinCalculatorTool() {
  return (
    <BlogPost title="Protein Calculator" image={BlogImage}>
      {/* <h1 className="bg-base-200 m-0 rounded-md p-6">How much protein do you need?</h1> */}
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
