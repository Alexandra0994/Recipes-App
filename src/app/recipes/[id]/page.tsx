import Image from "next/image";

async function getData(id : string) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`, {
    next: {
      revalidate: 60,// кожні 60 секунд буде оновлюватись
    //cache: 'no-store',
    },
  });
  const data = await res.json();
  return data;
}
export default async function Page( {
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const recipe = await getData(id);
    return (
        <>
      <Image src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-lg" />

      <div className="text-gray-700">
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Meal Type:</strong> {recipe.mealType.join(', ')}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Rating:</strong> ⭐ {recipe.rating} ({recipe.reviewCount} reviews)</p>
        <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} min</p>
        <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} min</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing} kcal</p>
      </div> 

       <section>
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ingredient:any) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((instruction:any) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ol>
      </section>
        </>
    );
}