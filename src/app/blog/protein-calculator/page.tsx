import ProteinCalculator from '@features/ProteinCalculator';
import BlogImage from '@public/images/blog/protein-calculator.png';
import BlogPost from '@shared/BlogPost';

export default function ProteinCalculatorTool() {
  return (
    <BlogPost title="Protein Calculator" image={BlogImage}>
      {/* <h1 className="bg-base-200 m-0 rounded-md p-6">How much protein do you need?</h1> */}
      <div>
        <h2>Why Protein Matters 🍗</h2>
        <p>
          Protein is an essential nutrient that plays a key role in building and repairing tissues, as well as
          supporting immune function and metabolism. Whether you&apos;re looking to build muscle, manage weight, or
          simply stay healthy, getting enough protein is crucial.
        </p>

        <ProteinCalculator />

        <h3>Protein-Rich Foods 💪</h3>
        <p>Here are some great sources of protein to incorporate into your meals:</p>
        <ul>
          <li>Lean meats: chicken breast, turkey breast, lean beef</li>
          <li>Fatty fish: salmon, tuna, mackerel</li>
          <li>Eggs: whole eggs, egg whites</li>
          <li>Dairy: Greek yogurt, cottage cheese, milk</li>
          <li>Plant-based proteins: tofu, tempeh, lentils, chickpeas</li>
          <li>Nuts and seeds: almonds, peanuts, chia seeds, hemp seeds</li>
          <li>Quinoa and other whole grains</li>
          <li>Protein-rich vegetables: spinach, broccoli, Brussels sprouts</li>
          <li>Protein supplements: whey protein, plant-based protein powders</li>
          <li>Seafood: shrimp, scallops, crab</li>
        </ul>

        <p>
          Incorporating these protein-rich foods into your diet can help you meet your daily protein needs and support
          your fitness goals.
        </p>
      </div>
    </BlogPost>
  );
}
