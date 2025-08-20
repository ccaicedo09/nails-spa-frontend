import { useForm } from "react-hook-form"
import useGitHub from "../hooks/useGitHub";
import spectreCSS from "../assets/spectre_css.webp";
import './styles/GitHubCard.css'

const GitHubCard = () => {
  const { github, isFollowing, followers, fetchGithub, toggleFollow } = useGitHub();
  const {register, handleSubmit} = useForm();

  function searchGithub(user) {
    fetchGithub(user.github);
  }

  return (
    <>
      <form className="bg-white rounded-2xl shadow-lg p-6 mb-6" onSubmit={handleSubmit(searchGithub)}>
        <label className="text-lg font-semibold text-gray-800 mb-3 block" htmlFor="github">Buscar Usuario de GitHub</label>
        
        <div className="flex gap-2">
          <input 
            className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg" 
            id="github" 
            type="text" 
            placeholder="Ingresa un username de GitHub" 
            {...register("github", {required: true})} 
          />
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2" 
            aria-label="Buscar"
          >
            🔍 Buscar
          </button>
        </div>
      </form>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{ width: "420px" }}>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
              <img src={github.avatar_url || spectreCSS} alt={`Github Profile ${github.login}`} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-2xl font-bold">{github.name || github.login || "Usuario no encontrado"}</div>
              <div className="text-blue-100">@{github.login || "not_found"}</div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              {github.bio || "🛠️ Arreglando bugs... o creándolos. Si el código compila, es un milagro. Si además funciona, mejor no tocar nada. 🚀"}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <button 
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isFollowing 
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
              }`} 
              onClick={toggleFollow}
            >
              {isFollowing ? "Siguiendo ✓" : "Seguir"}
            </button>

            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">👥</span>
              <span className="font-semibold">{followers} seguidores</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GitHubCard;