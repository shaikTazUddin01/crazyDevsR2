import { FeatureList } from "../Shared/FeatureList";




const SocialMediaScheduling = () => {
  const postizFeatures = {
    autoPublish: [
      { "Instagram": true },
      { "Facebook": true },
      { "LinkedIn": true },
      { "Twitter": true },
      { "Google My Business": true },
      { "TikTok": true },
      { "Pinterest": true },
    ]as Array<Record<string, boolean>>,
    essentials: [
      { "Video Publishing": true },
      { "Save as Draft": true },
      { "Drag & Drop Calendar": true },
      { "Post Previews": true },
      { "Social Captions Lists": true },
      { "Best Times to Post": true },
      { "Image Cropping": true },
      { "Sharable Calendar URL": true },
    ]as Array<Record<string, boolean>>,
    tags: [
      { "Instagram": true },
      { "Facebook": true },
      { "LinkedIn": true },
    ]as Array<Record<string, boolean>>,
    autoPublishChannels: [
      { "Instagram": true },
      { "Facebook": true },
      { "LinkedIn": true },
      { "Twitter": true },
    ]as Array<Record<string, boolean>>,
    views: [
      { "Month": true },
      { "Week": true },
      { "List": true },
      { "Day": true },
      { "Board": true },
      { "Table": true },
    ]as Array<Record<string, boolean>>,
  };
  
  const bufferFeatures = {
    autoPublish: [
      { "Instagram": true },
      { "Facebook": true },
      { "LinkedIn": true },
      { "Twitter": true },
      { "Google My Business": true },
      { "Pinterest": true },
      { "YouTube": false },
    ]as Array<Record<string, boolean>>,
    essentials: [
      { "Video Publishing": true },
      { "Save as Draft": true },
      { "Drag & Drop Calendar": true },
      { "Post Previews": true },
      { "Social Captions Lists": true },
      { "Best Times to Post": true },
      { "Image Cropping": true },
      { "Sharable Calendar URL": true },
    ]as Array<Record<string, boolean>>,
    tags: [
      { "Instagram": true },
      { "Facebook": true },
      { "LinkedIn": true },
    ]as Array<Record<string, boolean>>,
    autoPublishChannels: [
      { "Instagram": true },
      { "Facebook": true },
      { "LinkedIn": true },
    ]as Array<Record<string, boolean>>,
    views: [
      { "Month": true },
      { "Week": true },
      { "List": true },
      { "Day": true },
      { "Board": true },
      { "Table": false },
    ]as Array<Record<string, boolean>>,
  };
  

  return (
    <div className="text-white pt-[120px]">
      <h1 className="text-[48px] font-bold text-center mb-[60px]">
        Social Media Scheduling & Publishing
      </h1>
      <div className="grid grid-cols-2 gap-3">
        {/* Postiz Section */}
        <div className="bg-[#1A1919] p-10 rounded-[20px]">
          <h2 className="text-[34px] font-bold mb-9">Postiz – Scheduling & Publishing</h2>
          <FeatureList title="Social networks for auto-publishing" features={postizFeatures.autoPublish as Array<Record<string,boolean>>} />
          <FeatureList title="Essentials" features={postizFeatures.essentials} />
          <FeatureList title="Tags users on" features={postizFeatures.tags} />
          <FeatureList title="Auto-publish carousels on" features={postizFeatures.autoPublishChannels} />
          <FeatureList title="Scheduling views supported" features={postizFeatures.views} />
        </div>

        {/* Buffer Section */}
        <div className="bg-[#1A1919] p-10 rounded-[20px]">
          <h2 className="text-[34px] font-bold ">Buffer – Scheduling & Publishing</h2>
          <FeatureList title="Social networks for auto-publishing" features={bufferFeatures.autoPublish} />
          <FeatureList title="Essentials" features={bufferFeatures.essentials} />
          <FeatureList title="Tags users on" features={bufferFeatures.tags} />
          <FeatureList title="Auto-publish carousels on" features={bufferFeatures.autoPublishChannels} />
          <FeatureList title="Scheduling views supported" features={bufferFeatures.views} />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaScheduling;
