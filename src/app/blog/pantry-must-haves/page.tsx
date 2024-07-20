import BlogImage from '@public/images/blog/pantry-must-haves.png';
import BlogPost from '@shared/BlogPost';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pantry Must-Haves: High Protein Foods',
  description:
    'Discover essential pantry-ready high protein foods for a healthy diet. Learn about protein-rich staples like tuna, Skyr, Greek yogurt, lentils, beans, and cottage cheese. Stock up on these items for easy meal preparation and enhanced muscle growth and repair.',
  keywords: [
    'high protein pantry foods',
    'pantry staples for protein',
    'protein-rich foods',
    'muscle growth diet',
    'high-protein meal prep',
    'Rippd pantry must-haves',
  ],
  alternates: {
    canonical: 'https://rippd.io/blog/pantry-must-haves',
  },
};

export default function PantryMustHaves() {
  return (
    <BlogPost title="Pantry Must-Haves: High Protein Foods" image={BlogImage}>
      <div>
        <h2>Must-Have Pantry-Ready Protein Foods for a Healthy Diet</h2>
        <p>
          Maintaining a diet rich in protein is essential for muscle growth, repair, and overall health. Whether
          you&apos;re a fitness enthusiast or just looking to incorporate more protein into your diet, having
          pantry-ready protein foods on hand can make meal prep a breeze. Here are some must-haves that you should stock
          up on! 🥫
        </p>

        <ul>
          <li>
            <strong>Tuna Cans</strong> 🐟 – Packed with lean protein and omega-3 fatty acids, canned tuna is perfect for
            salads, sandwiches, or a quick snack. <em>Protein content: about 20-25 grams per 85 grams.</em>
          </li>
          <li>
            <strong>Skyr</strong> – This Icelandic dairy product is similar to Greek yogurt but has an even higher
            protein content. It&apos;s creamy, delicious, and great with fresh fruit or honey.{' '}
            <em>Protein content: about 11 grams per 150 grams.</em>
          </li>
          <li>
            <strong>Greek Yogurt</strong> 🍶 – Thick, tangy, and loaded with protein, Greek yogurt is versatile for
            breakfast, smoothies, or as a healthy dessert base. <em>Protein content: about 10 grams per 150 grams.</em>
          </li>
          <li>
            <strong>Lentils</strong> 🍲 – These legumes are not only high in protein but also rich in fiber and iron.
            They cook quickly and can be added to soups, stews, and salads.{' '}
            <em>Protein content: about 18 grams per cup (cooked).</em>
          </li>
          <li>
            <strong>Beans</strong> 🫘 – Whether black, kidney, or chickpeas, beans are a fantastic plant-based protein
            source. Use them in everything from chili to hummus.{' '}
            <em>Protein content: about 15 grams per cup (cooked).</em>
          </li>
          <li>
            <strong>Cottage Cheese</strong> – This dairy product is a low-fat, high-protein option that can be enjoyed
            on its own or mixed with fruit for a nutritious snack.{' '}
            <em>Protein content: about 14 grams per 110 grams.</em>
          </li>
        </ul>

        <p>
          By keeping these protein-rich foods in your pantry, you can easily whip up healthy, high-protein meals
          anytime. Your body will thank you! 💪
        </p>

        <p>
          👉&nbsp;
          <Link href={`/blog/protein-calculator`}>Check out our tool to calculate your daily protein needs</Link>
        </p>
      </div>
    </BlogPost>
  );
}
