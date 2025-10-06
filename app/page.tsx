import { ConnectButton } from "../components/connect-button";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Orynth Website Builder
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build stunning websites with integrated Solana wallet connection
          </p>
        </div>

        <ConnectButton />

        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>
              Connect your Solana wallet to begin building
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Start Building
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
