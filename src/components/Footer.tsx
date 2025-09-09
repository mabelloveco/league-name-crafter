import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg">
                <Trophy className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-primary">Team Name Lab</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Generate the perfect fantasy football team name for your league. From funny to inappropriate, we’ve got you covered.
            </p>
          </div>

          {/* Team Name Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Team Names</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/funny-names" className="text-muted-foreground hover:text-primary">
                  Funny Names
                </Link>
              </li>
              <li>
                <Link to="/inappropriate-names" className="text-muted-foreground hover:text-primary">
                  Inappropriate Names
                </Link>
              </li>
              <li>
                <Link to="/player-themed-names" className="text-muted-foreground hover:text-primary">
                  Player-Themed Names
                </Link>
              </li>
              <li>
                <Link to="/pop-culture-names" className="text-muted-foreground hover:text-primary">
                  Pop Culture Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/generator" className="text-muted-foreground hover:text-primary">
                  Name Generator
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ad Space */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Advertisement</h3>
            <div className="w-full h-32 bg-accent/30 border-2 border-dashed border-border rounded-lg flex items-center justify-center">
              <span className="text-xs text-muted-foreground">300x250 Ad Unit</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Team Name Lab. All rights reserved. Generated team names are for entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};
