import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { auth, user, setLoading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    //watch,
    //formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, photoUrl } = data;
    console.log(name, photoUrl);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        setLoading(true);
        toast.success("Update Successful");
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <div className="container mx-auto flex justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update-Castle</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Update Profile</h1>
          <h2 className="my-3 text-4xl font-semibold">{user.displayName}</h2>
          <div className="flex justify-center">
            <img src={user.photoURL} height={200} width={200} alt="" />
          </div>
          <h2 className="my-3 text-xl font-semibold">{user.email}</h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-12"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                defaultValue={user.displayName}
                type="text"
                {...register("name")}
                name="name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Photo Url
                </label>
              </div>
              <input
                defaultValue={user.photoURL}
                {...register("photoUrl")}
                type="text"
                name="photoUrl"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
