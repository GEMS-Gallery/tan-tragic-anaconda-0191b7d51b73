import Text "mo:base/Text";
import Debug "mo:base/Debug";

actor {
  stable var gameHistory : Text = "DOOM is a groundbreaking first-person shooter game developed by id Software and released in 1993. It revolutionized the gaming industry with its immersive 3D graphics, intense gameplay, and multiplayer capabilities. Set on Mars' moons, players battle demons from Hell, using an array of weapons. DOOM's fast-paced action, innovative level design, and moddability contributed to its massive success and lasting influence on the FPS genre.";

  public query func getGameHistory() : async Text {
    gameHistory
  };

  public func updateGameHistory(newHistory : Text) : async () {
    gameHistory := newHistory;
    Debug.print("Game history updated successfully.");
  };
}
