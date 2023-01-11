import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Container,
  Copy,
  ProductLink,
  SocialNetwork,
  SocialNetworks,
  Title,
} from "./Share.styled";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  VKIcon,
  VKShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const Share = (props) => {
  const productFromShare = useSelector((state) =>
    state.goldVault.goldVault.find((el) => el._id === props.props)
  );
  console.log(productFromShare);
  const shareUrl = `http://localhost:3000/${productFromShare._id}`;

  return (
    <Container>
      <Title>Share</Title>
      <SocialNetworks>
        <SocialNetwork>
          <TelegramShareButton
            url={shareUrl}
            title="THE BEST SITES WE RECOMMEND!"
          >
            <TelegramIcon size={50} round={true} />
          </TelegramShareButton>
        </SocialNetwork>
        <SocialNetwork>
          <LinkedinShareButton
            url={shareUrl}
            title="THE BEST SITES WE RECOMMEND!"
            summary={productFromShare.desc}
            source={"https://m3nur.com"}
          >
            <LinkedinIcon size={50} round={true} />
          </LinkedinShareButton>
        </SocialNetwork>
        <SocialNetwork>
          <TwitterShareButton
            url={shareUrl}
            hashtags={productFromShare.tags}
            title="THE BEST SITES WE RECOMMEND!"
          >
            <TwitterIcon size={50} round={true} />
          </TwitterShareButton>
        </SocialNetwork>
        <SocialNetwork>
          <WhatsappShareButton
            url={shareUrl}
            title="THE BEST SITES WE RECOMMEND!"
          >
            <WhatsappIcon size={50} round={true} />
          </WhatsappShareButton>
        </SocialNetwork>
        <SocialNetwork>
          <EmailShareButton
            url={shareUrl}
            subject={productFromShare.title}
            body="m3nur"
            separator="ehske"
          >
            <EmailIcon size={50} round={true} />
          </EmailShareButton>
        </SocialNetwork>
        <SocialNetwork>
          <RedditShareButton
            url={shareUrl}
            title={productFromShare.title}
            hashtags={productFromShare.tags}
          >
            <RedditIcon size={50} round={true} />
          </RedditShareButton>
        </SocialNetwork>
        <SocialNetwork>
          <FacebookShareButton
            url={shareUrl}
            quote={`THE BEST SITES WE RECOMMEND!`}
          >
            <FacebookIcon size={50} round={true} />
          </FacebookShareButton>
        </SocialNetwork>
        <SocialNetwork>
          <VKShareButton
            url={shareUrl}
            title="THE BEST SITES WE RECOMMEND!"
            noParse={true}
          >
            <VKIcon size={50} round={true} />
          </VKShareButton>
        </SocialNetwork>
      </SocialNetworks>
      <Copy>
        <ProductLink value={shareUrl} readOnly />
        <Button onClick={() => navigator.clipboard.writeText(shareUrl)}>
          Copy
        </Button>
      </Copy>
    </Container>
  );
};

export default Share;
