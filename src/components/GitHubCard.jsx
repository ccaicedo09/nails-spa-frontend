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
      <form className="form-group text-left" onSubmit={handleSubmit(searchGithub)}>
        <label className="form-label" htmlFor="github">Github</label>
        
        <div style={{ display: "flex" }}>
          <input className="form-input" id="github" type="text" placeholder="Github username" {...register("github", {required: true})} />
          <button className="btn btn-primary"><i className="icon icon-search"></i></button>
        </div>
      </form>

      <div className="card text-left" style={{ width: "420px" }}>
        <figure className="avatar" style={{ width: "100px", height: "100px" }}>
          <img src={github.avatar_url || spectreCSS} alt={`Github Profile ${github.login}`} />
        </figure>

        <div className="card-header">
          <div className="card-title h5">{github.name || github.login || "User not found" }</div>
          <div className="card-subtitle text-gray">{github.login || "not_found"}</div>
        </div>

        <div className="card-body"style={{ fontSize: "14px"} }>
          {github.bio || "🛠️ Arreglando bugs... o creándolos. Si el código compila, es un milagro. Si además funciona, mejor no tocar nada. 🚀"}
        </div>

        <div className="card-footer">
          <button className={`btn btn-sm ${isFollowing ? null : "btn-primary"}`} onClick={toggleFollow}>
            {isFollowing ? "Following" : "Follow"}
          </button>

          <span style={{ fontSize: "14px", marginLeft: "10px" }}>
            <i className="icon icon-people"></i> {followers} followers
          </span>
        </div>
      </div>
    </>
  );
}

export default GitHubCard;