import { GithubIcon } from '../../public/GithubIcon';
import { SpotifyIcon } from '../../public/SpotifyIcon';
import { GmailIcon } from '../../public/GmailIcon';
import { YoutubeIcon } from '../../public/YoutubeIcon';
import { Launch } from './Launch';

export const LaunchList = () => {
  return (
    <div className="launch-list-container">
      <h2 className="launch-list-title">LAUNCHPAD</h2>
      <div className="launch-list">
        <Launch text="GitHub" icon={<GithubIcon />} url="https://github.com" />
        <Launch
          text="SPOTIFY"
          icon={<SpotifyIcon />}
          url="https://spotify.com"
        />
        <Launch
          text="GMAIL"
          icon={<GmailIcon />}
          url="https://mail.google.com"
        />
        <Launch
          text="YOUTUBE"
          icon={<YoutubeIcon />}
          url="https://youtube.com"
        />
      </div>
    </div>
  );
};
