import Text "mo:base/Text";
import Debug "mo:base/Debug";

actor {
  stable var gameHistory : Text = "DOOM is a groundbreaking first-person shooter game developed by id Software and released in 1993. It revolutionized the gaming industry with its immersive 3D graphics, intense gameplay, and multiplayer capabilities.";

  public query func getGameHistory() : async Text {
    gameHistory
  };

  public func updateGameHistory(newHistory : Text) : async () {
    gameHistory := newHistory;
    Debug.print("Game history updated successfully.");
  };
}
