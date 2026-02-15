import { QuickFlowItem } from './QuickFlowItem';
import { GithubIcon, SpotifyIcon, GmailIcon, YoutubeIcon } from '../../public';

export const QuickFlow = () => {
  return (
    <div className="quick-flow-container glass-panel">
      <h2 className="glass-panel-title">QUICK FLOW</h2>
      <div className="quick-flow">
        <QuickFlowItem
          text="GitHub"
          icon={<GithubIcon />}
          url="https://github.com"
        />
        <QuickFlowItem
          text="Spotify"
          icon={<SpotifyIcon />}
          url="https://spotify.com"
        />
        <QuickFlowItem
          text="Gmail"
          icon={<GmailIcon />}
          url="https://mail.google.com"
        />
        <QuickFlowItem
          text="YouTube"
          icon={<YoutubeIcon />}
          url="https://youtube.com"
        />
      </div>
    </div>
  );
};
