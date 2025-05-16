import Link from "next/link";

export default function RecipesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>RecipesLayout</h1>
            <ul>
                <li><Link href='/recipes/team'> link to team</Link></li>
            </ul>
                  {children}
        </div>
    );
}