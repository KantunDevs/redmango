'use client';

import Image from 'next/image';

import { MaxWidthWrapper } from '@styles/common';

import { Container, Paper, Title, Text, RelativeWrapper, PageTitle, ListItem } from './TermsOfUseSection.style';

import type { FC } from 'react';
import Link from 'next/link';

import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

const TermsOfUseSection: FC = () => (
  <RelativeWrapper>
    <FloatingImage
      alt="green bubble"
      height="clamp(671px/1.3, 44.37vw, 671px)"
      hideUnder={650}
      right="67%"
      src="/images/green-bubble-bg.svg"
      top="168%"
      width="clamp(652px/1.3,43.12vw, 652px)"
    />
    <FloatingImage
      alt="background"
      height="clamp(287px / 1.3, 18.98vw, 287px)"
      hideUnder={650}
      left="-57%"
      src="/images/orange-tos.png"
      top="861%"
      width="clamp(284px / 1.3, 18.78vw, 284px)"
    />
    <Container>
      <Image
        alt="background"
        src="/images/SmoothiePattern.png"
        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        fill
      />
    </Container>
    <MaxWidthWrapper>
      <Paper>
        <FloatingImage
          alt="avocado"
          height="clamp(216px / 1.3, 14.28vw, 216px)"
          hideUnder={650}
          right="52%"
          src="/images/avocado-tos.png"
          style={{ zIndex: 1 }}
          top="56%"
          width="clamp(165px / 1.3 , 10.91vw, 165px)"
        />
        <PageTitle>Terms of use</PageTitle>
        <Title>SMOOTHIE HOLDINGS, LLC TERMS AND CONDITIONS OF USE</Title>
        <Text>
          Welcome to the Smoothie Holdings, LLC website, <Link href="/">smoothiefactory.com.</Link> These Terms and
          Conditions of Use (“Terms”) apply to your access to, and use of, all or part of any website or mobile
          application of Smoothie Holdings, LLC or its subsidiaries and affiliated companies (collectively, “Smoothie
          Factory,” “we,” or “us”), including <Link href="/">smoothiefactory.com</Link> and any other site, mobile
          application (“Application”), or online service where these Terms are posted (collectively, the “Sites”). By
          accessing the Sites, you (“you”) agree to be bound by these Terms regardless of whether or not you have read
          them. If you do not agree to these Terms, do not access the Sites. The Sites are not targeted towards, nor
          intended for use by, anyone under the age of 13. YOU MUST BE AT LEAST 13 YEARS OLD TO ACCESS AND USE THE
          SITES. If you are between the ages of 13 and 18, you may only use the Sites under the supervision of a parent
          or legal guardian who agrees to be bound by these Terms.
        </Text>
        <Text>
          This website is undergoing construction and corrective action to address accessibility issues experienced by
          some of our customers. Smoothie Factory has adopted the W3C WAI Web Content Accessibility Guidelines (WCAG) as
          its accessibility standard for all online products and services that we design, develop and/or procure, on or
          after the effective date of this accessibility policy. We are working to ensure, to the extent practicable,
          the new online products and services satisfy the standard Success Criteria set forth in the WCAG 2.0. Smoothie
          Factory is committed to making its Sites accessible to customers with disabilities and welcomes suggestions
          for improvement. While we strive to make the Sites as accessible as possible, we ask for your patience during
          this time of transitions.
        </Text>
        <Title>CHANGES TO TERMS AND CONDITIONS</Title>
        <Text>
          Smoothie Factory may at any time, and at its sole discretion, modify these Terms or any policy or guideline of
          the Sites, including without limitation, the Privacy Policy, with or without notice. Such modifications will
          be effective immediately upon posting, and you waive any right you may have to receive specific notice of such
          changes or modifications. You agree to review these Terms periodically and your continued use of the Sites
          following such modifications will indicate your acceptance of these modified Terms. If you do not agree to any
          modification of these Terms, you must immediately stop using the Sites.
        </Text>
        <Title>INTELLECTUAL PROPERTY, COPYRIGHT AND TRADEMARK NOTICE</Title>
        <Text>
          The Sites and its contents, including but not limited to, all Site software, design, text, editorial
          materials, information, data, photographs, visual interfaces, user interfaces, images, graphics,
          illustrations, video, sound, games, clips, artwork, hyperlinks, displays, and other materials, (all such
          content collectively referred to as “Content”), and the design, structure, selection, coordination,
          expression, look and feel and arrangement of such Content, are protected under United States and international
          copyright laws and are the property of Smoothie Factory or its third party licensors. All rights are reserved
          by Smoothie Factory. The SMOOTHIE FACTORY name, design and related marks are registered trademarks of Smoothie
          Holdings, LLC. All other names, logos, splash screens, page headers, custom graphics and button icons, or
          other indicia of origin displayed on the Sites are either service marks, names, logos, trademarks, service
          marks, trade dress, or are otherwise the property (collectively, “Marks”) of Smoothie Factory or its third
          party licensors.
        </Text>
        <Title>INTELLECTUAL PROPERTY, COPYRIGHT AND TRADEMARK NOTICE</Title>
        <Text>
          The Sites and its contents, including but not limited to, all Site software, design, text, editorial
          materials, information, data, photographs, visual interfaces, user interfaces, images, graphics,
          illustrations, video, sound, games, clips, artwork, hyperlinks, displays, and other materials, (all such
          content collectively referred to as “Content”), and the design, structure, selection, coordination,
          expression, look and feel and arrangement of such Content, are protected under United States and international
          copyright laws and are the property of Smoothie Factory or its third party licensors. All rights are reserved
          by Smoothie Factory. The SMOOTHIE FACTORY name, design and related marks are registered trademarks of Smoothie
          Holdings, LLC. All other names, logos, splash screens, page headers, custom graphics and button icons, or
          other indicia of origin displayed on the Sites are either service marks, names, logos, trademarks, service
          marks, trade dress, or are otherwise the property (collectively, “Marks”) of Smoothie Factory or its third
          party licensors.
        </Text>
        <Text>
          Except as specifically permitted herein, copying, distributing, transmitting, displaying, modifying, selling
          or participating in the sale of, or otherwise exploiting or using any Content or any Marks in any form or by
          any means without the express written permission of Smoothie Factory is prohibited and may violate the
          copyright, trademark or unfair competition laws of the United States and/or other countries. All rights not
          expressly granted are reserved.
        </Text>
        <Text>
          Smoothie Factory hereby grants you a personal, non-exclusive, non-assignable, non-transferable, limited, and
          revocable license to use and display the Content and to use the Application for noncommercial and personal use
          only; provided that you maintain all copyright and other notices contained in such Content and only use the
          Application on a device owned or controlled by you as permitted by the rules contained in the terms contained
          in the Apple, Inc. Terms and Conditions (“Apple Terms”) or the Google Inc. Google Play Terms of Service
          (“Google Terms”), whichever is applicable to your device. Smoothie Factory, content providers and content
          providers’ licensors do not transfer any title, right or interest to or in any Content to you. If any of the
          provisions of the Apple Terms or the Google Terms conflict with our Terms, our Terms will control, solely to
          the extent that such terms apply to the Application. You agree not to reproduce, modify, create derivative
          works from, display, perform, distribute, sell, rent, lease, transfer, sublicense, disseminate, broadcast or
          circulate any Content to any third party (including, without limitation, the display and distribution of
          Content via a third party website) without express prior written consent of Smoothie Factory. Use of Content
          is only permitted with the express written permission of Smoothie Factory and/or its licensors. You further
          agree that you will not disassemble, decompile, reverse engineer, modify or otherwise reduce the computer file
          in which the Content is stored to a human-readable form. In addition, you may not attempt to circumvent,
          avoid, bypass, remove, deactivate, impair or otherwise defeat any encryption, rights signaling or copy
          protection technology in which the Content is wrapped or otherwise associated with, and you may not edit,
          modify, translate, or create adaptations of the Content.
        </Text>
        <Text>This Section will survive the termination of your right to use the Sites.</Text>
        <Title>DIGITAL MILLENIUM COPYRIGHT ACT (“DMCA”) NOTICE</Title>
        <Text>
          Pursuant to the Digital Millennium Copyright Act, 17 U.S.C. Sec. 512(c), if you believe any material available
          on the Sites infringes upon a copyright that you own or control, you may file a notification of such
          infringement with our Designated Agent as set forth below or you can contact us via the{' '}
          <Link href="/about-us">Contact Us</Link> section of the Site.
        </Text>
        <Text>
          Smoothie Holdings, LLC <br />
          Customer Care
          <br />
          14850 Montfort Drive, Suite 131
          <br />
          Dallas, TX 75254
          <br />
        </Text>
        <Text>
          If you knowingly misrepresent in your notification that the material or activity is infringing, you will be
          liable for any damages, including costs and attorneys’ fees, incurred by us or the alleged infringer as the
          result of our relying upon such misrepresentation in removing or disabling access to the material or activity
          claimed to be infringing.
        </Text>
        <Text>
          In accordance with the DMCA and other applicable law, we have adopted a policy of terminating, in appropriate
          circumstances and in our sole discretion, users who are deemed to be repeat infringers. We may also, in our
          sole discretion, limit access to the Sites and/or terminate the accounts of any users who infringe any
          intellectual property rights of others, whether or not there is any repeat infringement.
        </Text>
        <Title>YOUR COMMENTS AND TRANSMISSIONS</Title>
        <Text>
          We appreciate your comments, reviews, photos, content, remarks, feedback, suggestions, ideas, inventions,
          artwork, developments, concepts, and other types of communications, materials and submissions you disclose or
          transmit to us or to publicly-accessible social networks such as Facebook®, Twitter®, Instagram®, Path®,
          TwitPic®, Lockerz®, our Application, and similar information and image gathering and sharing services
          (collectively, “Submissions”). You represent and warrant that your Submissions are not subject to any
          confidentiality obligations and that you own and control all of the rights to the Submissions, have the lawful
          right to distribute and produce such Submissions, or otherwise have the right to grant the rights to Smoothie
          Factory that you grant under these Terms. Smoothie Factory is free to use the Submissions for any purpose
          whatsoever. By making a Submission, you grant Smoothie Factory and its affiliates a perpetual, irrevocable,
          worldwide, royalty-free, non-exclusive and fully sublicensable right and license to make, use, reproduce,
          modify, adapt, publish, translate, create derivative works of, distribute, publicly perform, publicly display,
          develop, manufacture, advertise, and market your Submissions, and any related copyrights, moral rights or
          other intellectual property rights therein throughout the world, in any medium or technology of any kind now
          existing or developed in the future. If you elect to forward to us or to transmit via publicly-accessible
          social networks any such Submission, then by doing so, you acknowledge that (1) we are not liable for any use,
          disclosure, or return to you of your Submission, (2) no confidential relationship is established or is to be
          implied in any way from our receipt of the Submission and any statement to the contrary with your Submission
          shall not alter this condition, (3) you understand that you will not be entitled to any compensation from us
          based upon your Submission or our use thereof, (4) the receipt of your Submission shall not constitute a
          waiver by us of our rights to contest the validity of any copyright, or other intellectual property rights
          that you may now or hereafter claim for the Submission, (5) you release Smoothie Factory and its agents and
          employees from any claims that such use, as authorized above, violates your rights, and (6) any previously,
          concurrently or subsequently submitted materials relating to this Submission shall be considered to have been
          submitted in accordance with these conditions. By making a Submission, you also warrant that you own the
          material/content submitted, that it is original, that it is not defamatory, and that Smoothie Factory’s use of
          the Submission will not violate any third party’s rights. Smoothie Factory is under no obligation to use any
          Submission or any part thereof.
        </Text>
        <Text>
          Further, you grant Smoothie Factory and its sublicensees the right to use your name and likeness that you
          submit in connection with such materials and content, if they choose. You represent and warrant that you own
          or otherwise control all of the rights to any Submission and in the materials and content that you post, and
          that you have the lawful right to distribute and produce such Submissions, or otherwise have the right to
          grant the rights to Smoothie Factory that you grant under these Terms; that the content is accurate; that use
          of any Submission, materials or content you supply does not and will not cause injury to any person or entity;
          and that you will indemnify Smoothie Factory and its sublicensees for all claims resulting from any
          Submission, materials and content you supply. Smoothie Factory has the right but not the obligation to monitor
          and edit or remove any activity or content on the Sites. Smoothie Factory takes no responsibility and assumes
          no liability for Submissions and/or any materials or content posted by you or any third party.
        </Text>
        <Text>
          We ask that you do not submit confidential information or materials to us. We will not keep the Submission
          confidential and we may use it as we see fit. By submitting anything to us, you acknowledge that the
          Submission is not confidential, or that even if you think that it is, you are waiving any rights you may have
          to the Submission being confidential or any ownership interest you think that you have in the Submission.
          Also, please do not submit anything to us that you have done for your employer during the course of your
          employment.
        </Text>

        <Title>YOUR OBLIGATIONS</Title>
        <Text>
          In order to participate in certain areas of our Sites, you will need to register for an account. In providing
          registration and other information to Smoothie Factory, you agree to provide true, accurate, current and
          correct information about yourself, and to maintain and update registration information to keep it true,
          accurate, current and complete. If Smoothie Factory has reasonable grounds to suspect that such information is
          untrue, inaccurate, not current or incomplete, Smoothie Factory has the right to suspend or terminate your
          account and refuse any and all current or future use of the account. You agree to maintain the security of
          your account by not sharing your password and will promptly notify Smoothie Factory if you discover or
          otherwise suspect any security breaches related to your account. You agree to take responsibility for all
          activities that occur under your account and accept all risks of unauthorized access.
        </Text>
        <Text>
          In using the Sites you agree that you will not: (a) post, disseminate or transmit unauthorized advertising,
          promotional materials, chain letters, junk mail or any other type of unsolicited mass email to people or
          entities who have not agreed to be part of such mailings; (b) omit, delete, forge or misrepresent transmission
          information, including headers, return mailing and Internet protocol addresses, or otherwise manipulate
          identifiers to disguise the origin of any content; (c) impersonate any person or entity, or falsely state or
          otherwise misrepresent an affiliation with any person or entity; (d) engage in any activities intended to
          withhold or cloak identity or contact information; (e) send harassing and/or threatening messages to others;
          (f) post excessive responses to interactive features or functions of the Sites; or (g) engage in “flooding,”
          i.e., ICMP flooding and mail bombing (sending large amounts of email repeatedly to the same email address).
        </Text>
        <Text>
          You agree that you are responsible for your own communications and that you will not post, disseminate or
          transmit any content that: (a) is unlawful, harassing, defamatory, abusive, threatening, obscene, harmful,
          tortious, libelous, invasive of another’s privacy, obscene, pornographic, indecent, lewd, suggestive,
          threatening, inflammatory, fraudulent, otherwise objectionable or which threatens our relationship with our
          employees, partners, customers, or suppliers; (b) infringes or violates any party’s copyright, trademark,
          trade secret, patent or other proprietary right including, but not limited to, using third-party copyrighted
          materials without appropriate permission, using third-party trademarks without appropriate permission or
          attribution, and using or distributing third-party information protected as a trade secret in violation of a
          duty of confidentiality; (c) you do not have the right to disseminate or transmit under law or under
          contractual or fiduciary relationships; (d) contains personally identifiable information belonging to minors;
          (e) impersonates any person or entity or otherwise misrepresents your identity or affiliation with another
          person or entity; (f) is spam, direct marketing or any unsolicited advertising, promotional materials or other
          forms of solicitation or commercial content; or (g) violates these Terms, or in Smoothie Factory’s sole
          discretion, is objectionable, restricts or inhibits any other person from using or enjoying the Sites, or
          which damage the image or rights of Smoothie Factory, other users, or third parties.
        </Text>
        <Text>
          To the extent that the following activities are prohibited by applicable law, in using the Sites you will not:
          (a) use the Sites for any illegal purpose, in violation of any applicable laws or regulations; (b) publish web
          pages that contain links that initiate downloads or streaming of copyright-infringing or other illegal
          material; (c) electronically stalk or otherwise electronically harass another; or (d) engage in any Internet
          activities that would violate the personal privacy rights of others, including but not limited to, collecting
          and distributing information about Internet users without their permission, except as permitted by applicable
          law.
        </Text>
        <Text>
          To the extent that any of the following activities materially interfere with the Sites or the network and
          systems of a Smoothie Factory service provider (“Service”), you will not: (a) post, disseminate or transmit
          any worm, viruses or other harmful, disruptive or destructive files, code or programs on the Sites; (b) use
          Internet Relay Chat (IRC) bots, i.e., programs that utilize excessive resources by connecting to an IRC
          network and running 24 hours per day; (c) hinder the ability of others to use IRC; (d) disrupt the normal flow
          on the Sites or otherwise act in a manner that negatively affects other users’ ability to engage in real time
          exchanges; (e) interfere with, disrupt, or harm in any way the servers or networks connected to the Sites or
          Service; (f) use the Sites or Service to access the accounts of others without permission; (g) attempt to
          penetrate security measures of the Sites, Service, or another entity, or obtain or bypass others’ passwords;
          or (h) engage in denial of service attacks, i.e., actions designed to impair network access by flooding a site
          or the Internet with useless traffic.
        </Text>
        <Title>MODIFICATIONS TO THE SITES</Title>
        <Text>
          Changes may be made at any time to the information, names, text, software, images, pictures, logos,
          trademarks, products and services and any other material displayed on, offered through or contained on the
          Sites. The Sites may include inaccuracies or typographical errors that may be corrected as they are discovered
          at Smoothie Factory’s sole discretion. Further, Smoothie Factory reserves the right, for any reason, in its
          sole discretion, to terminate, change or suspend any aspect of the Sites including but not limited to content,
          features or hours of availability. Smoothie Factory may impose limits on certain features of the Sites or
          restrict your access to part or all of the Sites without notice or penalty.
        </Text>
        <Title>PRIVACY</Title>
        <Text>
          Our Privacy Policy applies to use of the Sites, and its terms are made a part of these Terms by this
          reference. Click here to <Link href="/privacy">view our Privacy Policy.</Link> Please review this privacy
          statement and print a copy for your records. Additionally, by using the Sites, you acknowledge and agree that
          Internet transmissions are never completely private or secure. You understand that any message or information
          you send to the Sites may be read or intercepted by others, even if there is a special notice that a
          particular transmission is encrypted. The Sites do not intend to target or collect personal information from
          individuals under the age of 13.
        </Text>
        <Title>MOBILE PAYMENT</Title>
        <Text>
          You may elect to participate in certain functionality of the Sites which will allow you to use the Sites to
          purchase Smoothie Factory products (“Mobile Payment”). Mobile payment may be accepted at participating
          Smoothie Factory locations in the United States. Smoothie Factory reserves the right at any time to
          discontinue Mobile Payment or change the location of the restaurants accepting Mobile Payment.
        </Text>
        <Title>MOBILE ORDER AND PAY (MOP) AND DELIVERY</Title>
        <Text>
          You may also elect to participate in certain functionality of the Sites which will allow you in certain
          Smoothie Factory locations in certain markets to use the Sites to order and pay for certain Smoothie Factory
          products prior to arrival at the restaurant (“MOP”). Smoothie Factory reserves the right at any time to
          discontinue MOP or change the location of the restaurants or markets offering MOP.
        </Text>

        <Title>GIFT CARDS TERMS AND CONDITIONS (“Gift Card Rules”)</Title>
        <Text>
          The Gift Card Terms and Conditions (this “Gift Card Rules”) is an agreement between you and Smoothie Factory,
          and describes the terms and conditions that apply to your gift card [when available]. By buying, loading, or
          using a Gift Card, you agree to these terms. Please read the following provisions, as well as the complete
          Terms of Use and Privacy Policy that govern the Sites.These Gift Card Rules include an Arbitration provision
          that governs any disputes between you and us. This provision will: 1) Eliminate your right to a trial by jury;
          and 2) Substantially affect your rights, including preventing you from bringing, joining, or participating in
          class or consolidated proceedings.
        </Text>

        <Title>ABOUT YOUR GIFT CARD</Title>
        <Text>
          Smoothie Factory gift cards are not subject to any service fees or expiration dates. Your use of a gift card
          constitutes your acceptance of the complete Gift Card Rules (including the Arbitration provisions). Gift cards
          are redeemable for food, drink and eligible merchandise at participating locations in the United States.
          Eligible merchandise or services are determined by Smoothie Factory in its sole discretion and may be changed
          without notice. Gift cards cannot be used to purchase other gift cards and you will not receive Rewards points
          for the purchase of any gift card. Gift cards cannot be redeemed for cash or applied as payment to any
          account, unless required by law. In California, all gift cards are redeemable for cash upon request if the
          balance on the card is less than $10.00. Gift cards may be redeemable for cash when their balance falls below
          a certain amount in other states within the United States as well.
        </Text>

        <Title>ELECTRONIC GIFT CARDS</Title>
        <Text>
          The Electronic Gift Card program allows you to purchase and send a virtual Card via email. You may choose the
          design and dollar value (within certain limits) and complete your purchase using a credit card, or debit card.
          You will need the email address for the recipient of your Card eGift (also known as an “eGift” or “eGift
          Card”). You authorize us to charge your credit card or debit card at the time you purchase your eGift.
        </Text>
        <Text>
          We will send the recipient of your eGift an email notifying them that they have received an eGift from you. He
          or she will then be able to print out the eGift and bring it into a location to make a purchase. An eGift is
          like a gift card and should be treated like cash by the recipient.
        </Text>
        <Text>
          Each eGift has a unique gift card account number associated with it no matter how many times the email is
          printed out. We will only give refunds for unused eGifts with the original receipt.
        </Text>
        <Title>ADDING VALUE TO YOUR GIFT CARD</Title>
        <Text>
          In the United States, you can load a dollar value on a gift card by using a credit card, debit card or cash by
          visiting any participating location. You may not load more than $500 worth of value on each gift card. The
          minimum amount that must be loaded onto your gift card is $5. Smoothie Factory may change the maximum and
          minimum amounts at any time by notifying you at the point of sale, by phone when you call or on the Sites, and
          such change shall not constitute an amendment to these Gift Card Rules.
        </Text>
        <Title>LOST, STOLEN OR DAMAGED GIFT CARD REPLACEMENT POLICY</Title>
        <Text>
          Unless you have an original sales receipt for your gift card and your 16-digit gift card number, or unless it
          has been registered by you on <Link href="/about-us">smoothiefactory.com</Link> and you can provide us your
          email address or phone number that you used to register your gift card, the remaining gift card value will not
          be replaced if lost, stolen or damaged.
        </Text>
        <ul>
          <ListItem>
            If you registered your gift card with us, you can contact us via the Contact Us section of the Site or via
            your account balance page (go to disable my gift card) and we can deactivate your lost, stolen or damaged
            gift card and load the balance remaining at the time of notification onto a new gift card or FACTORY REWARDS
            account.
          </ListItem>
          <ListItem>
            You can also go into a participating location, with your original receipt for the gift card purchase and
            your 16-digit gift card number or, again, if you registered the gift card with us and you can provide your
            email address or phone number that you used to register the gift card. The restaurant personnel can
            deactivate your gift card and issue you a new gift card with the remaining balance.
          </ListItem>
          <ListItem>
            If you cannot either go online or to a participating SMOOTHIE FACTORY restaurant and if your gift card has
            been lost, stolen or damaged, please mail: (1) the 16-digit gift card number (or if you registered your gift
            card with us, you can provide us with the email address or phone number used at the time of registration),
            (2) an original location receipt indicating the purchase of the gift card, (3) a copy of a valid government
            issued I.D. (Driver’s License, Military I.D., or Passport), and (4) your complete name and mailing address
            to: Smoothie Holdings, LLC, Attn: Gift Cards Replacement, 14850 Montfort Drive, Suite 131, Dallas, TX 75254.
            Upon satisfactory receipt of these required information, Smoothie Factory will cancel your old gift card and
            issue a new gift card in the amount of any remaining balance on your old gift card on the date of Smoothie
            Factory’s receipt of the such information. The replacement gift card will be mailed to the address you
            provide, which must be a valid street address. P.O. Boxes will not be accepted. Please make a copy of all
            documents you submit to us for your records. All documents submitted become Smoothie Factory’s property and
            will not be returned. Please allow up to 8 weeks for delivery of the replacement gift card. Smoothie Factory
            shall not be responsible for any lost, late, illegible, damaged, misdirected, incomplete or postage due
            mail. Reproduction, purchase, trade or sales of Report Form, gift card numbers, and or cash register
            receipts are prohibited. Fraudulent submissions may result in prosecution under applicable federal mail
            fraud statutes.
          </ListItem>
        </ul>
        <Title>FRAUD ASSOCIATED WITH YOUR GIFT CARD OR CARD BALANCE</Title>
        <Text>
          We will not accept any gift card, or will limit use of any gift card or gift card balance, if we reasonably
          believe that the use is unauthorized, fraudulent or otherwise unlawful, and we consider such action
          appropriate to limit our risk. Smoothie Factory does not control who may sell preloaded gift cards, nor can we
          control the price or preloaded denominations offered by independent sellers. Consequently, Smoothie Factory
          has no liability to you for any third party fraud or unlawful activity associated with any gift card balance.
          If Smoothie Factory discovers any gift card or gift card balance was sourced or derived from fraud or other
          unlawful means, in our sole discretion, we may cancel all impacted gift cards and retain all related gift card
          balances without notice to you. We may use retained gift card balances to help offset our liability to card
          companies, networks and issuers of lost or stolen credit and debit cards used to purchase or load gift cards.
        </Text>
        <Title>REGISTRATION, LIABILITY FOR UNAUTHORIZED TRANSACTIONS</Title>
        <Text>
          To register your gift card, please visit <Link href="/">smoothiefactory.com</Link>. When registering a gift
          card, you agree that you will: (i) provide complete and accurate information about yourself; and (ii) update
          such information if it changes. If you do not provide or update such information, or if we have reasonable
          grounds to suspect that you have not provided or updated such information, we shall have the right, in our
          sole and absolute discretion, to disable your gift card. If you believe your gift card has been disabled in
          error, please call (214) 302-5979. You are responsible for: (a) the accuracy of all information that you
          provide to us; and (b) maintaining the confidentiality and security of your gift card information.
        </Text>
        <Text>
          Because your gift card is used like cash for purchases from participating locations, you are responsible for
          all transactions associated with your gift card, including unauthorized transactions. However, if your gift
          card is lost, stolen or destroyed, the card can be replaced with the balance remaining on it at the time of
          your call, but only if you have registered it with us. Please notify us immediately if you change any of your
          registration information. If your gift card becomes lost, stolen or damaged, you should contact us via the
          Contact Us section of the Site. Your gift card balance is only protected from the point in time you notify us
          that your gift card is missing. We will freeze the remaining balance on your gift card at the time you notify
          us and will load that remaining balance on a replacement gift card.
        </Text>
        <Title>ARBITRATION</Title>
        <Text>
          Please read this section carefully. It affects rights that you may otherwise have. It provides for resolution
          of most disputes through arbitration instead of court trials and class actions. Arbitration is more informal
          than a lawsuit in court, uses a neutral arbitrator instead of a judge or jury, and discovery is more limited.
          Arbitration is final and binding and subject to only very limited review by a court. This arbitration clause
          shall survive termination of these Gift Card Rules.
        </Text>
        <Text>
          This provision is intended to be interpreted broadly to encompass all disputes or claims arising out of or
          relating to these Gift Card Rules, your gift card and your relationship with us. Any dispute or claim arising
          out of or relating to these Gift Card Rules or use of the gift card and your relationship with Smoothie
          Factory or any subsidiary, parent or affiliate company or companies (whether based in contract, tort, statute,
          fraud, misrepresentation or any other legal theory) will be resolved by binding arbitration, except that
          either of us may take claims to small claims court if they qualify for hearing by such a court.
        </Text>
        <Text>
          Notwithstanding the above, you may choose to pursue your claim in court and not by arbitration if you opt out
          of this arbitration provision within 30 days from the earliest of the date you purchased, loaded, reloaded or
          used any of your gift cards (the “Opt Out Deadline”) after these Gift Card Rules have gone into effect. You
          may opt out of these arbitration procedures by sending us a written notice that you opt out to the following
          address: Smoothie Holdings, LLC, Attn: Customer Service, 14850 Montfort Drive, Suite 131, Dallas, TX 75254.
          Any opt-out received after the Opt Out Deadline (allowing three (3) additional days for mailing) will not be
          valid and you must pursue your claim in arbitration or small claims court.
        </Text>
        <Text>
          For all disputes, whether pursued in court or arbitration, you must first send a written description of your
          For all disputes, whether pursued in court or arbitration, you must first send a written description of your
          claim to our Customer Service department to allow us an opportunity to resolve the dispute. You and we each
          agree to negotiate your claim in good faith. You may request arbitration if your claim or dispute cannot be
          resolved within sixty (60) days. The arbitration of any dispute or claim shall be conducted in accordance with
          the rules of the American Arbitration Association (“AAA”), including the AAA’s Consumer Arbitration Rules (as
          applicable), as modified by this Agreement. The AAA Rules and information about arbitration and fees are
          available online at www.adr.org. You and we agree that these Gift Card Rules evidences a transaction in
          interstate commerce and this arbitration provision will be interpreted and enforced in accordance with the
          U.S. Federal Arbitration Act and federal arbitration law, and not governed by state law. Any arbitration will
          be held in a reasonably convenient location in the state in which you reside or at another mutually agreed
          location. The arbitration will be conducted in the English language. An arbitrator may award on an individual
          basis any relief that would be available in a court, including injunctive or declaratory relief to the extent
          required to satisfy your individual claim, and must follow and enforce these Gift Card Rules and this
          arbitration agreement as a court would. Any arbitration shall be confidential, and neither you nor we may
          disclose the existence, content or results of any arbitration, except as may be required by law or for
          purposes of enforcement of the arbitration award. Judgment on any arbitration award may be entered in any
          court having proper jurisdiction.
        </Text>
        <Text>
          Except for claims determined to be frivolous, upon filing of the arbitration demand, we will pay half of all
          filing, administration and arbitrator fees other than the initial $200 filing fee. Each party will bear the
          fees and expense of its own attorneys, experts, witnesses and preparation and presentation of evidence at the
          arbitration.
        </Text>
        <Text>
          You and we each agree that any proceeding, whether in arbitration or in court, will be conducted only on an
          individual basis and not in a class, consolidated or representative action. If a court or arbitrator
          determines in an action between you and us that this class action waiver is unenforceable, the arbitration
          agreement will be void as to you. If you opt out of the arbitration provision as specified above, this class
          action waiver provision will not apply to you. Neither you, nor any other customer, can be a class
          representative, class member, or otherwise participate in a class, consolidated or representative proceeding
          without having complied with the opt out procedure set forth above. If for any reason a claim proceeds in
          court rather than through arbitration, you and we each waive any right to a jury trial.
        </Text>
        <Text>
          These Gift Card Rules and this agreement to arbitrate shall be governed by and construed in accordance with
          the laws of the State of Texas not withstanding any conflict-of-laws rules.
        </Text>
        <Title>DISCLAIMER</Title>
        <Text>
          THE SITES, THEIR CONTENTS, AND ANY SOFTWARE, FUNCTIONS AND ALL INFORMATION, PRODUCTS AND SERVICES CONTAINED IN
          OR OFFERED THROUGH THE SITES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT REPRESENTATIONS OR
          WARRANTIES OF ANY KIND. SMOOTHIE FACTORY AND ITS LICENSORS AND CONTENT PROVIDERS EXPRESSLY DISCLAIM ALL SUCH
          REPRESENTATIONS AND WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, WARRANTIES OF TITLE,
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NONINFRINGEMENT (INCLUDING, WITHOUT LIMITATION,
          NONINFRINGEMENT OF THIRD PARTY RIGHTS, ERROR-FREE OR UNINTERRUPTED SERVICE, ACCURACY AVAILABILITY,
          RELIABILITY, SECURITY, CURRENCY AND COMPLETENESS ARISING FROM OR RELATING TO THE SITES, THEIR CONTENT OR ANY
          LINKS, ANY SOFTWARE, TOOLS, TIPS, PRODUCTS OR SERVICES PROVIDED THROUGH THE SITES) AND ANY IMPLIED WARRANTIES
          ARISING FROM COURSE OF DEALING OR COURSE OF PERFORMANCE WITH RESPECT TO THE SITES, ANY GIFT CARD AND/OR ANY
          FACTORY REWARDS CARD OR ACCOUNT. SMOOTHIE FACTORY DOES NOT WARRANT THAT THE GIFT CARD AND/OR THE FACTORY
          REWARDS CARD OR ACCOUNT WILL ALWAYS BE ACCESSIBLE OR ACCEPTED. SMOOTHIE FACTORY DOES NOT WARRANT THAT THE
          SITES OR THEIR CONTENTS WILL BE COMPLETE, ACCURATE, TIMELY, UNINTERRUPTED, SECURE OR ERROR FREE, OR THAT
          DEFECTS WILL BE CORRECTED. ALL INFORMATION ON THE SITES IS SUBJECT TO CHANGE WITHOUT NOTICE. SOME
          JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY
          TO YOU.
        </Text>
        <Title>LIMITATION OF LIABILITY</Title>
        <Text>
          IN NO EVENT SHALL SMOOTHIE FACTORY OR ANY OF ITS SUBSIDIARIES, AFFILIATES, FRANCHISEES, LICENSEES AND ANY OF
          THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, MEMBERS, SHAREHOLDERS, AGENTS, SUCCESSORS, ASSIGNS OR OTHER
          REPRESENTATIVES BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, CONSEQUENTIAL, SPECIAL, EXEMPLARY, INCIDENTAL OR
          AGGRAVATED DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA, INCOME OR PROFIT, LOSS OF OR
          DAMAGE TO PROPERTY AND THIRD PARTY CLAIMS) OR ANY OTHER DAMAGES OF ANY KIND, ARISING OUT OF OR IN CONNECTION
          WITH: THE SITES; ANY CONTENT OR MATERIALS, INFORMATION, QUALIFICATION AND RECOMMENDATIONS APPEARING ON THE
          SITES; ANY SOFTWARE, TOOLS, TIPS, PRODUCTS, OR SERVICES OFFERED THROUGH, CONTAINED IN OR ADVERTISED ON THE
          SITES; ANY LINK PROVIDED ON THE SITES; AND YOUR ACCOUNT AND PASSWORD, WHETHER OR NOT SMOOTHIE FACTORY HAS BEEN
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL SMOOTHIE FACTORY OR ITS AFFILIATES OR
          SUBSIDIARIES HAVE ANY LIABILITY FOR UNAUTHORIZED ACCESS TO, OR ALTERATION, THEFT OR DESTRUCTION OF A GIFT CARD
          AND/OR FACTORY REWARDS ACCOUNT OR CARD THROUGH ACCIDENT, MISUSE OR FRAUDULENT MEANS OR DEVICES BY YOU OR ANY
          THIRD PARTY, OR AS A RESULT OF ANY DELAY OR MISTAKE RESULTING FROM ANY CIRCUMSTANCES BEYOND OUR CONTROL. THIS
          EXCLUSION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW. THIS PROVISION SHALL SURVIVE THE
          TERMINATION OF YOUR RIGHT TO USE THE SITES.
        </Text>
        <Text>
          YOU ACKNOWLEDGE THAT YOU WILL BE FULLY LIABLE FOR ALL DAMAGES RESULTING DIRECTLY OR INDIRECTLY FROM YOUR USE
          OF THE SITES.
        </Text>
        <Title>INDEMNIFICATION</Title>
        <Text>
          You agree to defend, indemnify and hold Smoothie Factory and each of its subsidiaries, affiliates,
          franchisees, licensees and any of their respective directors, officers, employees, shareholders, members,
          agents, licensees, successors, assigns or other representatives, harmless from and against any and all claims,
          losses, damages, liabilities, costs and expenses, including reasonable fees and expenses of counsel, incurred
          or suffered by them and arising from or related to your (i) use of the Sites including, without limitation,
          transmission or placement of information or material by you on the Sites, (ii) use of a gift card, (iii) use
          of a FACTORY REWARDS card, account or any earned rewards or points, or (iv) violation of any of these Terms
          including, without limitation, the Smoothie Factory Loyalty Program Rules and the Gift Card Rules. This
          provision shall survive the termination of your right to use the Sites.
        </Text>
        <Title>DISPUTE RESOLUTION</Title>
        <Text>
          All disputes between you and Smoothie Factory arising or relating to: (a) these Terms; (b) the Sites; (c) any
          advertisement or promotion relating to these Terms or the Sites; or (d) transactions effectuated through the
          Sites; or (e) the relationship which results from these Terms (including relationships with third parties who
          are not party to these Terms) shall be resolved by binding individual arbitration under the American
          Arbitration Association’s rules for consumer-related disputes. Neither you nor Smoothie Factory will
          participate in a class action or class-wide arbitration for any claims covered by these Terms. If this class
          action waiver is found to be unenforceable in a particular case, then this entire arbitration agreement shall
          be null and void in that case. These Terms shall be governed by the Federal Arbitration Act and, where
          consistent, Texas law. Smoothie Factory reserves the right to change this dispute resolution provision, but
          any such changes will not apply to disputes filed before the effective date of the amendment. This provision
          will survive the termination of your right to use the Sites.
        </Text>
        <Title>TERMINATION</Title>
        <Text>Smoothie Factory may at any time and at its sole discretion terminate your right to use the Sites.</Text>
        <Title>GOVERNING LAW</Title>
        <Text>
          You agree that all matters relating to your access to or use of the Sites, including all disputes, will be
          governed by the laws of the United States and by the laws of the State of Texas without regard to its
          conflicts of laws provisions. You agree to the personal jurisdiction by and venue in the state and federal
          courts in Dallas County, Texas, and waive any objection to such jurisdiction or venue.
        </Text>
        <Title>ASSIGNMENT</Title>
        <Text>
          We may assign all or part of these Terms without notice to you. We are then released from all liability. You
          may not assign these Terms without our prior written consent and any attempted assignment will be void.
        </Text>

        <Title>GENERAL PROVISIONS</Title>
        <Text>
          Except for the portion of these Terms specifically labeled as the FACTORY REWARDS Terms and Conditions, which
          govern the FACTORY REWARDS program (i.e., Smoothie Factory Loyalty Program Rules) or the SMOOTHIE FACTORY Gift
          Card Terms and Conditions, which govern the SMOOTHIE FACTORY Gift Card program (i.e., Gift Card Rules), these
          Terms constitute a binding agreement between you and Smoothie Factory and supersede all prior agreements,
          understandings and representations between the parties regarding the subject matter herein. In the event of an
          inconsistency between these Terms and either the Smoothie Factory Loyalty Program Rules or the Gift Card Rules
          relating to your use of the Sites, these Terms shall prevail. In the event of an inconsistency between these
          Terms and the Smoothie Factory Loyalty Program Rules relating to your use of your FACTORY REWARDS loyalty card
          or FACTORY REWARDS points, the Smoothie Factory Loyalty Program Rules shall prevail. In the event of an
          inconsistency between these Terms and the Gift Card Rules relating to your use of your SMOOTHIE FACTORY gift
          card, the Gift Card Rules shall prevail. No failure by Smoothie Factory or you to exercise any rights, powers
          or remedies hereunder or its delay to do so shall constitute a waiver of these rights, powers or remedies. The
          single or partial exercise of a right, power or remedy shall not prevent its subsequent exercise or the
          exercise of any other right, power or remedy. If any provision of these Terms or part thereof is or becomes
          illegal, invalid or unenforceable in any jurisdiction, the illegality, invalidity or unenforceability of that
          provision will not affect the legality, validity or enforceability of the remainder of the provision or the
          remaining provisions of these Terms, as the case may be, or the legality, validity or enforceability of that
          provision or part thereof in any other jurisdiction. These Terms are effective until terminated by you or
          Smoothie Factory, which Smoothie Factory may do at any time, without notice, in its sole discretion. If you
          become dissatisfied with the Sites, your only recourse is to immediately discontinue use of the Sites. All
          provisions of the Terms regarding representations, warranties, indemnification, disclaimers, and limitations
          of liability shall survive the termination of the Terms.
        </Text>
        <Text>
          If you have any questions or comments about these Terms, please call us at (214) 302-5979 or contact us via
          the Contact Us section of the Site.
        </Text>

        <Title>LINKS</Title>
        <Text>
          The Sites contains links to or references to other web sites owned and operated by third party, including
          among others those of advertisers and other third parties and companies whose trademarks appear on the Sites.
          These links are provided for your convenience only. No endorsement of any third party products, services or
          information is expressed or implied by any information, material or content of any third party contained in,
          referred to, included on, or linked from or to this Site. Any information, data, opinions, recommendation,
          products or services provided by such third parties through links to other websites or otherwise made
          available through their websites are solely those of such third parties and not of Smoothie Factory or its
          affiliates. This could be the case even for those web sites that carry Smoothie Factory’s or its affiliates’
          trademarks or logos or which are framed by the Sites. Your use of such third party websites is subject to the
          terms and conditions of use and the privacy policies of such websites. We are not responsible for the
          information collection practices or the content of the sites to which we link.
        </Text>
        <Title>NOTICE TO CALIFORNIA RESIDENTS</Title>
        <Text>
          Under California Civil Code Section 1789.3, California website users are entitled to the following specific
          consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the California
          Department of Consumer Affairs may be contacted in writing at 1625 North Market Blvd., Suite N 112,
          Sacramento, CA 95834 or by telephone at (800) 952-5210.
        </Text>
        <Text>
          If you are a California resident, you can also request a notice disclosing the categories or personal
          information we have shared with third parties, if any, for the third parties’ direct marketing purposes. To
          request a notice, please submit your request by mail to: Smoothie Holdings, LLC, Attn: Customer Service, 14850
          Montfort Drive, Suite 131, Dallas, TX 75254. Please specify that you are requesting a “California Privacy
          Rights Notice.” We will make every effort to promptly respond to your request.
        </Text>
        <Title>CONTACT US</Title>
        <Text>
          If you have any questions or concerns regarding these Terms (including, without limitation, the Smoothie
          Factory Loyalty Program Rules or the Gift Card Rules) or regarding the privacy or security of any SMOOTHIE
          FACTORY gift card or FACTORY REWARDS card or account, please call us at (214) 302-5979 or contact us via the
          Contact Us section of the Site, or write to us at Smoothie Holdings, LLC, 14850 Montfort Drive, Suite 131,
          Dallas, TX 75254.
        </Text>
        <Text>© 2021 Smoothie Holdings, LLC. All rights reserved.</Text>
      </Paper>
    </MaxWidthWrapper>
  </RelativeWrapper>
);

export default TermsOfUseSection;
