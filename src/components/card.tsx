'use client'

import { Recipe } from '@/types/types'
import Link from 'next/link'

interface RecipeCardProps {
  recipe: Recipe
}

export default function Card({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition w-full max-w-sm">
      <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{recipe.name}</h2>

        <div className="text-sm text-gray-500">{recipe.cuisine} • {recipe.difficulty}</div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>Prep: {recipe.prepTimeMinutes} min</span>
          <span>Cook: {recipe.cookTimeMinutes} min</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>🍽 Servings: {recipe.servings}</span>
          <span>🔥 {recipe.caloriesPerServing} kcal</span>
        </div>

        <div className="text-yellow-500 text-sm">⭐ {recipe.rating} ({recipe.reviewCount} reviews)</div>

        <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition">
        <Link href={`/recipes/${recipe.id}`}>  View Recipe</Link>
        </button>
      </div>
    </div>
  )
}
