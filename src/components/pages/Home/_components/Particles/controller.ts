import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

const ParticlesController = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return { particlesInit, particlesLoaded };
};

export default ParticlesController;
