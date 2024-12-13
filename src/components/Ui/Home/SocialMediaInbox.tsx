import { FeatureList } from "../Shared/FeatureList";


const SocialMediaInbox = () => {
   
      
      const postizMedia = {
        
          Essentials:[
            { "Add Labels to Messages": true },
            { "Assign Users to Messages": true },
            { "Create Custom Automations": true },
            { "Bulk Actions": true },
          ]as Array<Record<string, boolean>>,
        
        
          Instagram:[
            { "Reply to dm": true },
            { "Reply to comment": true },
            { "Reply to storyMention": true },
            { "Reply to storyReply": true },
          ]as Array<Record<string, boolean>>,
        
        
          Facebook: [
            { "Reply to comment": true },
            { "Reply to dm": true },
          ]as Array<Record<string, boolean>>,
        
       
         Twitter: [
            { "Reply to mention": true },
            { "Reply to dm": true },
          ]as Array<Record<string, boolean>>,
        
        
         LinkedIn: [
            { "Reply to comment": true },
          ]as Array<Record<string, boolean>>,
       
        
         GoogleMyBusiness: [
            { "Reply to review": true },
          ]as Array<Record<string, boolean>>,
       
       
         TikTok: [
            { "Reply to comment": true },
          ]as Array<Record<string, boolean>>,
        
        };
      
      const bufferMedia = {
      
            Essentials:[
              { "Add Labels to Messages": true },
              { "Assign Users to Messages": true },
              { "Create Custom Automations": true },
              { "Bulk Actions": true },
            ]as Array<Record<string, boolean>>,
        
         
            Instagram:[
              { "Reply to dm": true },
              { "Reply to comment": true },
              { "Reply to storyMention": true },
              { "Reply to storyReply": true },
            ]as Array<Record<string, boolean>>,
          
            Facebook: [
              { "Reply to comment": true },
              { "Reply to dm": true },
            ]as Array<Record<string, boolean>>,
         
           Twitter: [
              { "Reply to mention": true },
              { "Reply to dm": true },
            ]as Array<Record<string, boolean>>,
         
           LinkedIn: [
              { "Reply to comment": true },
            ]as Array<Record<string, boolean>>,
          
         
           GoogleMyBusiness: [
              { "Reply to review": true },
            ]as Array<Record<string, boolean>>,
          
        
           TikTok: [
              { "Reply to comment": true },
            ]as Array<Record<string, boolean>>,
          
        };

  return (
    <div className="text-white pt-[120px]">
      <h1 className="text-[48px] font-bold text-center mb-[60px] font-plus-jakarta">
        Social Media Analytics & Reporting
      </h1>
      <div className="grid grid-cols-2 gap-3">
        {/* Postiz Section */}
        <div className="bg-[#1A1919] p-10 rounded-[20px]">
          <h2 className="text-[34px] font-bold mb-9 font-plus-jakarta">Postiz – Analytics & Reporting</h2>
          <FeatureList title="Essentials" features={postizMedia?.Essentials } />
          <FeatureList title="Instragram" features={postizMedia.Instagram} />
          <FeatureList title="Facebook" features={postizMedia.Facebook} />
          <FeatureList title="Twitter" features={postizMedia.Twitter} />
          <FeatureList title="Linkedin" features={postizMedia.LinkedIn} />
          <FeatureList title="Google My Business" features={postizMedia.GoogleMyBusiness} />
          <FeatureList title="TikTok" features={postizMedia.TikTok} />
        </div>

        {/* Buffer Section */}
        <div className="bg-[#1A1919] p-10 rounded-[20px]">
          <h2 className="text-[34px] font-bold font-plus-jakarta">Buffer – Analytics & Reporting</h2>
          <FeatureList title="Essentials" features={bufferMedia.Essentials} />
          <FeatureList title="Instragram" features={bufferMedia.Instagram} />
          <FeatureList title="Facebook" features={bufferMedia.Facebook} />
          <FeatureList title="Twitter" features={bufferMedia.Twitter} />
          <FeatureList title="Linkedin" features={bufferMedia.LinkedIn} />
          <FeatureList title="Google My Business" features={bufferMedia.GoogleMyBusiness} />
          <FeatureList title="TikTok" features={bufferMedia.TikTok} />
        </div>
      </div>
    </div>
  );
};;

export default SocialMediaInbox;