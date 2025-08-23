/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { useUpdateProfileMutation } from "@/redux/features/user/user.api";
import { toast } from "sonner";

const Profile = () => {
  const [updateProfile, { isLoading: updateLoading }] = useUpdateProfileMutation();
  const { data, isLoading, refetch } = useUserInfoQuery(undefined);
  const user = data?.data;
  const [editOpen, setEditOpen] = useState(false);
  // react-hook-form setup
  const form = useForm({
    defaultValues: {
      name: user?.name || '',
      phone: user?.phone || '',
      address: user?.address || '',
    },
  });

  React.useEffect(() => {
    form.reset({
      name: user?.name || '',
      phone: user?.phone || '',
      address: user?.address || '',
    });
  }, [user, editOpen]);

  // Handle form submit
  const onSubmit = async (payload: any) => {
    try {
      const res = await updateProfile({ ...payload, userId: user?._id }).unwrap();
      setEditOpen(false);
      refetch();
      if (res.success) {
        toast(res.message || "Profile Updated Successfully")
      }

    } catch (error: any) {
      // Try to get errorSources array
      const errorSources =
        error?.data?.errorSources ||
        error?.error?.data?.errorSources ||
        error?.errorSources;
      if (Array.isArray(errorSources) && errorSources.length > 0) {
        errorSources.forEach((err: any) => {
          toast(`${err.path ? `${err.path}: ` : ""}${err.message}`);
        });
      } else {
        const message =
          error?.data?.message ||
          error?.error?.data?.message ||
          error?.message ||
          error?.data?.err?.message ||
          "Login failed";
        toast(message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-background">
      <Card className="w-full max-w-2xl p-8 rounded-2xl shadow-xl border border-primary/10 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          {/* Avatar and badge */}
          <div className="relative flex flex-col items-center">
            {isLoading ? (
              <Skeleton className="w-28 h-28 rounded-full" />
            ) : (
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-primary/10 flex items-center justify-center text-2xl sm:text-4xl font-bold text-primary border-2 sm:border-4 border-primary shadow">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            )}
            <span className={`absolute bottom-2 right-2 px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${user?.isActive === 'ACTIVE' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{user?.isActive}</span>
          </div>
          {/* Info section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-lg font-bold text-primary mb-1 flex items-center gap-2">
                {user?.name}
                {user?.isAgentApproved && <span className="ml-1 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-semibold">Verified</span>}
              </div>
              <div className="text-sm text-muted-foreground mb-1">{user?.email}</div>
              <div className="text-sm text-muted-foreground mb-1">{user?.phone}</div>
              <div className="text-xs text-muted-foreground mb-1">NID: <span className="font-semibold">{user?.nid}</span></div>
              <div className="text-xs text-muted-foreground mb-1">Role: <span className="font-semibold text-primary">{user?.role}</span></div>
              <div className="text-xs text-muted-foreground mb-1">Joined: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : ''}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Status:</span>
                <span className={`font-semibold ${user?.isActive === 'ACTIVE' ? 'text-green-600' : 'text-red-500'}`}>{user?.isActive}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Approved:</span>
                <span className={`font-semibold ${user?.isAgentApproved ? 'text-green-600' : 'text-red-500'}`}>{user?.isAgentApproved ? 'Yes' : 'No'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Address:</span>
                <span className="font-semibold text-xs">{user?.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Last Updated:</span>
                <span className="font-semibold text-xs">{user?.updatedAt ? new Date(user.updatedAt).toLocaleDateString() : ''}</span>
              </div>
            </div>
          </div>
        </div>
        <Button className="w-full mt-2" onClick={() => setEditOpen(true)}>
          Edit Profile
        </Button>
      </Card>

      {/* Edit Profile Modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Update your profile information below.</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <input className="w-full border rounded px-3 py-2 text-sm" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input className="w-full border rounded px-3 py-2 text-sm" value={user?.email || ''} disabled />
                </FormControl>
              </FormItem>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <input className="w-full border rounded px-3 py-2 text-sm" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <input className="w-full border rounded px-3 py-2 text-sm" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2 mt-6">
                <Button type="submit" className="flex-1" disabled={updateLoading}>
                  {updateLoading ? 'Saving...' : 'Save'}
                </Button>
                <DialogClose asChild>
                  <Button type="button" variant="outline" className="flex-1" disabled={updateLoading}>Cancel</Button>
                </DialogClose>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;