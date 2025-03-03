import { useEffect, useState } from "react"

const useGitHub = () => {
  const [github, setGithub] = useState({});
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(0);

  const devs = ["julian-bc", "gabo-hacStyle", "ccaicedo09", "IsNatthy"];

  async function fetchGithub(dev) {
    const url = `https://api.github.com/users/${dev}`;
    const response = await fetch(url);
    if (response.status === 404) {
      const randomDev = devs[Math.floor(Math.random() * devs.length)];
      alert(`${dev} no encontrado, conoce un miembro de nuestro equipo de trabajo.`);
      fetchGithub(randomDev);
    } else {
      const data = await response.json();
      setGithub(data);
      setFollowers(data.followers);
      setIsFollowing(false);
    }
  }

  function toggleFollow () { 
    setIsFollowing(!isFollowing);
    setFollowers(isFollowing ? followers - 1 : followers + 1);
  }

  useEffect (() => {
    const dev = devs[Math.floor(Math.random() * devs.length)]
    fetchGithub(dev);
  }, []);

  return { github, isFollowing, followers, fetchGithub, toggleFollow };
}

export default useGitHub;