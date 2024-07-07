import Image from 'next/image';
import BlogImage from '../../../../public/images/blog/why-is-protein-important.png';

export default function WhyIsProteinImportant() {
  return (
    <div className="flex flex-col">
      <article className="prose max-w-full">
        <div className="flex flex-col lg:flex-row items-center">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold">
            The Power of Protein: Why is protein important?
          </h1>
          <Image
            src={BlogImage}
            className="rounded-md w-[250px] h-[250px] m-0 lg:hidden"
            alt="Protein foods"
            width={250}
            height={250}
          />

          <Image
            src={BlogImage}
            className="rounded-md w-[400px] h-[400px] hidden m-0 lg:block"
            alt="Protein foods"
            width={400}
            height={400}
          />
        </div>
        <div>
          <h2>Protein is Essential for Your Health 💪</h2>
          <p>
            Protein is a crucial macronutrient that plays a vital role in maintaining and improving your overall health.
            It is the building block of muscles, skin, enzymes, and hormones, making it essential for your body’s
            structure and function. Here are some key reasons why protein is important:
          </p>

          <h3>1. Muscle Growth and Repair 🏋️‍♀️</h3>
          <p>
            Protein is fundamental for muscle growth and repair. Whether you&apos;re working out or recovering from an
            injury, adequate protein intake helps repair muscle tissue and promote new growth, keeping your muscles
            strong and healthy.
          </p>

          <h3>2. Weight Management ⚖️</h3>
          <p>
            Including high-protein foods in your diet can aid in weight management. Protein helps increase feelings of
            fullness, reducing hunger and aiding in calorie control. This makes it easier to stick to a healthy eating
            plan and achieve your weight loss goals.
          </p>

          <h3>3. Metabolism Boost 🔥</h3>
          <p>
            Protein has a higher thermic effect compared to fats and carbohydrates, meaning your body burns more
            calories digesting and metabolizing protein. This boost in metabolism can help you maintain a healthy weight
            and support overall energy levels.
          </p>

          <h3>4. Bone Health 🦴</h3>
          <p>
            Protein is important for maintaining strong bones. It works in synergy with calcium and vitamin D to
            preserve bone density, reducing the risk of fractures and osteoporosis as you age.
          </p>

          <h3>5. Immune Function 🛡️</h3>
          <p>
            Proteins play a key role in supporting your immune system. Antibodies and immune cells rely on protein to
            function effectively, helping your body fight off infections and illnesses.
          </p>

          <p>
            Incorporating high-protein recipes into your diet is a delicious and effective way to ensure you&apos;re
            getting enough of this essential nutrient. Explore our collection of healthy, high-protein recipes to fuel
            your body and support your health goals!
          </p>

          <ul>
            <li>Muscle Growth and Repair</li>
            <li>Weight Management</li>
            <li>Metabolism Boost</li>
            <li>Bone Health</li>
            <li>Immune Function</li>
          </ul>

          <p>Here&apos;s a quick code snippet to calculate your daily protein needs:</p>

          <label className="input input-bordered flex items-center gap-2 w-fit">
            <input type="number" className="w-20" placeholder="Weight" />
            <span className="font-semibold">kg</span>
          </label>
        </div>
      </article>
    </div>
  );
}
