import RecipeCard from '@/components/card';
import { Recipe } from '@/types/types';

async function getData(): Promise<Recipe[]> {
  const res = await fetch('https://dummyjson.com/recipes', {
    next: {
      revalidate: 60,// кожні 60 секунд буде оновлюватись
    //cache: 'no-store',
    },
  });
  const data = await res.json();
  return data.recipes;
}
export default async function RecipesPage() {
  const recipes = await getData();
  return (
  <>
  <ul>
    {recipes.map((recipe:any) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
    ))}</ul></>
  );
}
