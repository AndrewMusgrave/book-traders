import React, { Component, Fragment } from 'react';
import * as actions from '../actions';
import {
  Container,
  TextContainer,
  Danger,
  List,
  Link,
} from '../components';
import { connect } from 'react-redux';

function TermsAndConditions() {
  return (
    <Container.Sub loose>
      <TextContainer>
        <h2 className="main-header">
          <Danger>Fake </Danger>Legal Notice*
        </h2>
        <p>
          Wikipedia is an online open-content collaborative
          encyclopedia; that is, a voluntary association of
          individuals and groups working to develop a common
          resource of human knowledge. The structure of the
          project allows anyone with an Internet connection
          to alter its content. Please be advised that
          nothing found here has necessarily been reviewed
          by people with the expertise required to provide
          you with complete, accurate or reliable
          information.
        </p>

        <p>
          that is not to say that you will not find valuable
          and accurate information in Wikipedia; much of the
          time you will. However,
          <b>
            {' '}
            Wikipedia cannot guarantee the validity of the
            information found here.{' '}
          </b>
          The content of any given article may recently have
          been changed, vandalized or altered by someone
          whose opinion does not correspond with the state
          of knowledge in the relevant fields. Note that
          most other encyclopedias and reference works also
          have disclaimers.
        </p>

        <h2>No formal peer review</h2>

        <p>
          Our active community of editors uses tools such as
          the Special:Recentchanges and Special:Newpages
          feeds to monitor new and changing content.
          However, Wikipedia is not uniformly peer reviewed;
          while readers may correct errors or engage in
          casual peer review, they have no legal duty to do
          so and thus all information read here is without
          any implied warranty of fitness for any purpose or
          use whatsoever. Even articles that have been
          vetted by informal peer review or featured article
          processes may later have been edited
          inappropriately, just before you view them.
        </p>

        <p>
          <em>
            None of the contributors, sponsors,
            administrators or anyone else connected with
            Wikipedia in any way whatsoever can be
            responsible for the appearance of any inaccurate
            or libelous information or for your use of the
            information contained in or linked from these
            web pages.
          </em>
        </p>
        <h2>No contract; limited license</h2>
        <p>
          Please make sure that you understand that the
          information provided here is being provided
          freely, and that no kind of agreement or contract
          is created between you and the owners or users of
          this site, the owners of the servers upon which it
          is housed, the individual Wikipedia contributors,
          any project administrators, sysops or anyone else
          who is in any way connected with this project or
          sister projects subject to your claims against
          them directly. You are being granted a limited
          license to copy anything from this site; it does
          not create or imply any contractual or
          extracontractual liability on the part of
          Wikipedia or any of its agents, members,
          organizers or other users.
        </p>
        <p>
          There is
          <b>
            {''}
            no agreement or understanding between you and
            Wikipedia{' '}
          </b>
          regarding your use or modification of this
          information beyond the Creative Commons
          Attribution-Sharealike 3.0 Unported License
          (CC-BY-SA) and the GNU Free Documentation License
          (GFDL); neither is anyone at Wikipedia responsible
          should someone change, edit, modify or remove any
          information that you may post on Wikipedia or any
          of its associated projects.
        </p>
        <h2>Trademarks</h2>
        <p>
          Any of the trademarks, service marks, collective
          marks, design rights or similar rights that are
          mentioned, used or cited in the articles of the
          Wikipedia encyclopedia are the property of their
          respective owners. Their use here does not imply
          that you may use them for any purpose other than
          for the same or a similar informational use as
          contemplated by the original authors of these
          Wikipedia articles under the CC-BY-SA and GFDL
          licensing schemes. Unless otherwise stated
          Wikipedia and Wikimedia sites are neither endorsed
          by nor affiliated with any of the holders of any
          such rights and as such Wikipedia cannot grant any
          rights to use any otherwise protected materials.
          Your use of any such or similar incorporeal
          property is at your own risk.
        </p>
        <h2>Personality rights</h2>
        <p>
          Wikipedia contains material which may portray an
          identifiable person who is alive or deceased
          recently. The use of images of living or recently
          deceased individuals is, in some jurisdictions,
          restricted by laws pertaining to personality
          rights, independent from their copyright status.
          Before using these types of content, please ensure
          that you have the right to use it under the laws
          which apply in the circumstances of your intended
          use.
          <em>
            You are solely responsible for ensuring that you
            do not infringe someone else's personality
            rights.
          </em>
        </p>
        <h2>Jurisdiction and legality of content</h2>
        <p>
          Publication of information found in Wikipedia may
          be in violation of the laws of the country or
          jurisdiction from where you are viewing this
          information. The Wikipedia database is stored on
          servers in the United States of America, and is
          maintained in reference to the protections
          afforded under local and federal law. Laws in your
          country or jurisdiction may not protect or allow
          the same kinds of speech or distribution.
          Wikipedia does not encourage the violation of any
          laws, and cannot be responsible for any violations
          of such laws, should you link to this domain or
          use, reproduce or republish the information
          contained herein.
        </p>
        <h2>Not professional advice</h2>
        <p>
          If you need specific advice (for example, medical,
          legal, financial or risk management), please seek
          a professional who is licensed or knowledgeable in
          that area.
        </p>
        <h2>
          *If you have read this you probably have already
          gathered it's straight from
          <Link
            type="normal"
            href="https://en.wikipedia.org/wiki/Wikipedia:General_disclaimer"
          >
            {' '}
            wikipedia
          </Link>
        </h2>
      </TextContainer>
    </Container.Sub>
  );
}

export default TermsAndConditions;
