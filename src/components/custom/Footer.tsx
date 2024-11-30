import { FolderGit, X, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <p>&copy; 2024 Josh Gdovin. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/jgdovin"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-400"
            >
              <FolderGit size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/joshgdovin/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
