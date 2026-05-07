let cachedResult;

export const canUseWebGL = () => {
  if (cachedResult !== undefined) return cachedResult;
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    const context =
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));

    if (context) {
      const loseContext = context.getExtension("WEBGL_lose_context");
      if (loseContext) loseContext.loseContext();
    }

    cachedResult = Boolean(context);
    return cachedResult;
  } catch {
    cachedResult = false;
    return false;
  }
};
