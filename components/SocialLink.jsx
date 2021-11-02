import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLink({ href, Icon }) {
  return (
    <a className="rounded-full bg-blue-500 p-2" href={href}>
      <FontAwesomeIcon icon={Icon} size="2x" className="text-purple-500" />
    </a>
  );
}

export default SocialLink;
