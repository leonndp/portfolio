function SkillIcon({ children, src = "/react.svg" }) {
  return (
    <div className="text-center">
      <img className="mb-3 mx-auto w-12 h-12" src={src} />
      <p className="text-lg">{children}</p>
    </div>
  );
}

export default SkillIcon;
