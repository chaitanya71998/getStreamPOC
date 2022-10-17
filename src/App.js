import React from "react";
import {
  StreamApp,
  NotificationDropdown,
  FlatFeed,
  Activity,
  LikeButton,
  CommentField,
  CommentList,
  StatusUpdateForm
} from "react-activity-feed";
import "react-activity-feed/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhotoVideo,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { faBloggerB } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <StreamApp
        apiKey="6m7y8nv33ep9"
        appId="78000"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.iKj9vG4i7C27zPGlbGAn3yIWQISQDONnuWjm6yqaMz8"
      >
        <NotificationDropdown notify />
        <div>
          <StatusUpdateForm feedGroup="timeline" userId="user-one" />
          <div className="card">
            <FontAwesomeIcon icon={faPhotoVideo} />
            <FontAwesomeIcon icon={faBloggerB} style={{ marginLeft: "10px" }} />
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
        <FlatFeed
          notify
          Activity={props => (
            <Activity
              {...props}
              Footer={() => (
                <div style={{ padding: "6px 8px" }}>
                  <LikeButton {...props} />
                  <CommentField
                    activity={props.activity}
                    onAddReaction={props.onAddReaction}
                  />
                  <div style={{ padding: "6px 8px" }}>
                    <CommentList activityId={props.activity.id} />
                  </div>
                </div>
              )}
            />
          )}
        />
      </StreamApp>
    );
  }
}

export default App;
