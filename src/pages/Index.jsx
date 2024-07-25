import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Application</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a bare-bones application. Start building your features here!</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Sample Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Enter your name" />
              <Input placeholder="Enter your email" type="email" />
              <Button>Submit</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Placeholder Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Add your custom content, components, or features here.</p>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-48 mt-4" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;