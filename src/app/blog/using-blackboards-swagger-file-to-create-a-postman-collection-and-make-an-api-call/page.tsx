import BlogLayout from "@/components/layouts/BlogLayout";
import { meta } from "./meta";
import FigureWithCaption from "@/components/ui/FigureWithCaption";
import { fourHundredResponse, jwtScript } from "./examples";
import { createMetadata } from "@/lib/helpers";
import { internalRoutes } from "@/lib/constants/ui";

const { BlogRoute } = internalRoutes;

export const metadata = createMetadata({
    title: `${meta.title} | Blog`,
    path: `${BlogRoute}/${meta.slug}`,
});

export default function Page() {
    return (
        <BlogLayout {...meta}>
            <p>
                This guide will help you import Blackboard Ultra&apos;s API into
                Postman, set up authentication, and make your first API request.
                It&apos;s written for users who may be new to Postman or working
                with APIs.
            </p>
            <hr />
            <h2>Prerequisites</h2>
            <p>Before you begin, make sure you have:</p>
            <ul>
                <li>
                    A Blackboard Learn instance with REST API access enabled
                </li>
                <li>
                    A registered application in the{" "}
                    <a href="https://developer.blackboard.com/">
                        Anthology Developer Portal
                    </a>
                </li>
                <li>
                    Postman installed (
                    <a href="https://www.postman.com/downloads/">
                        Download here
                    </a>
                    )
                </li>
                <li>
                    Credentials for the <code>client_credentials</code> grant
                    type (provided when registering your application)
                </li>
            </ul>
            <hr />
            <h2>Step 1: Download the Blackboard API Swagger File</h2>
            <ol>
                <li>
                    <p>Go to the Blackboard REST API documentation:</p>
                    <p>
                        <a href="https://developer.blackboard.com/portal/displayApi">
                            https://developer.blackboard.com/portal/displayApi
                        </a>
                    </p>
                </li>
                <li>
                    <p>
                        Under the <strong>Learn APIs</strong> section,
                        right-click the link below and open it in a new tab (or,
                        open the link below):
                    </p>
                    <p>
                        <a href="https://devportal-docstore.s3.amazonaws.com/learn-swagger.json">
                            https://devportal-docstore.s3.amazonaws.com/learn-swagger.json
                        </a>
                    </p>
                </li>
            </ol>
            <FigureWithCaption
                src="/img/blog/postman_blackboard/1.3_save_the_json_file.webp"
                alt="Browser prompt to save the learn-swagger.json file as a JSON document."
                caption="Browser prompt to save the learn-swagger.json file as a JSON document."
            />
            <ol start={3}>
                <li>
                    <p>When prompted to save the file:</p>
                    <ol>
                        <li>
                            Name the file <code>learn-swagger.json</code>
                        </li>
                        <li>
                            Choose{" "}
                            <strong>JavaScript Object Notation (.json)</strong>{" "}
                            as the file type
                        </li>
                        <li>
                            Click <strong>Save</strong>
                        </li>
                    </ol>
                </li>
            </ol>
            <FigureWithCaption
                src="/img/blog/postman_blackboard/1.4_alternative_save.webp"
                alt="JSON Swagger file open in a browser tab with the Save button highlighted."
                caption="JSON Swagger file open in a browser tab with the Save button highlighted."
            />
            <ol start={4}>
                <li>
                    Alternatively, if your browser displays the file instead of
                    downloading it, click <strong>Save</strong>, then follow
                    step 3.
                </li>
            </ol>
            <hr />
            <h2>Step 2: Import the Swagger File into Postman</h2>
            <FigureWithCaption
                src="/img/blog/postman_blackboard/2.1_new_workspace.webp"
                alt="Postman interface showing how to create a new workspace from the New menu."
                caption="Postman interface showing how to create a new workspace from the New menu."
            />
            <ol>
                <li>
                    Open <strong>Postman</strong>.
                </li>
                <li>
                    From the top-left, click <strong>New &gt; Workspace</strong>
                    .
                </li>
            </ol>
            <FigureWithCaption
                src="/img/blog/postman_blackboard/2.3_blank_workspace.webp"
                caption='Postman workspace creation window with "Blank workspace" selected.'
                alt='Postman workspace creation window with "Blank workspace" selected.'
            />
            <ol start={3}>
                <li>
                    Select <strong>Blank workspace</strong> and click{" "}
                    <strong>Next</strong>.
                </li>
                <li>
                    Name your workspace something like{" "}
                    <strong>Blackboard APIs</strong>, then click{" "}
                    <strong>Create</strong>.
                </li>
            </ol>
            <FigureWithCaption
                src="/img/blog/postman_blackboard/2.5_import_postman_collection.webp"
                alt="Postman interface with the Import window open, selecting the Swagger file as a Postman Collection."
                caption="Postman interface with the Import window open, selecting the Swagger file as a Postman Collection."
            />
            <ol start={5}>
                <li>
                    <p>Once in your new workspace:</p>
                    <ol>
                        <li>
                            Click <strong>File &gt; Import…</strong> (or press{" "}
                            <code>Command + O</code>)
                        </li>
                        <li>
                            Locate and select the{" "}
                            <code>learn-swagger.json</code> file you downloaded
                        </li>
                        <li>
                            Make sure <strong>Postman Collection</strong> is
                            selected as the import type
                        </li>
                        <li>
                            Click <strong>Import</strong>
                        </li>
                    </ol>
                </li>
            </ol>
            <p>
                You should now see the Learn API endpoints available in the{" "}
                <strong>Collections</strong> tab.
            </p>
            <hr />
            <h2>Step 3: Set Up the Authentication Environment</h2>
            <FigureWithCaption
                src="/img/blog/postman_blackboard/3.1_create_env.webp"
                alt="Creating a new environment in Postman with the Create Environment modal open."
                caption="Creating a new environment in Postman with the Create Environment modal open."
            />
            <ol>
                <li>
                    In Postman, click <strong>Environments</strong> (top-right)
                    &gt; <strong>Create Environment</strong>.
                </li>
            </ol>
            <FigureWithCaption
                src="/img/blog/postman_blackboard/3.2_save_env.webp"
                alt="Postman environment editor showing variables for base URL, client username, and client password."
                caption="Postman environment editor showing variables for base URL, client username, and client password."
            />
            <ol start={2}>
                <li>
                    <p>
                        Name the environment something like{" "}
                        <strong>Blackboard Auth</strong>.
                    </p>
                </li>
                <li>
                    <p>
                        Add the following <strong>variables</strong>:
                    </p>
                    <ul>
                        <li>
                            <strong>baseUrl</strong>
                            <ul>
                                <li>Initial Value: (Provided by Anthology)</li>
                                <li>
                                    Type: <code>Default</code>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>basicAuthUsername</strong>
                            <ul>
                                <li>Initial Value: (From Developer Portal)</li>
                                <li>
                                    Type: <code>Secret</code>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>basicAuthPassword</strong>
                            <ul>
                                <li>Initial Value: (From Developer Portal)</li>
                                <li>
                                    Type: <code>Secret</code>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ol>
            <blockquote>
                <p>
                    These values are provided when you register your application
                    in the{" "}
                    <a href="https://developer.blackboard.com/">
                        Anthology Developer Portal
                    </a>
                    . You&apos;ll use the <code>client ID</code> as your
                    username and the <code>client secret</code> as your
                    password.
                </p>
            </blockquote>
            <ol>
                <li>
                    Click <strong>Save</strong> (or press{" "}
                    <code>Command + S</code>).
                </li>
            </ol>
            <hr />
            <h2>Step 4: Request an Access Token</h2>
            <p>
                To interact with Blackboard&apos;s REST API, you&apos;ll need to
                obtain an OAuth2 access token. This token authenticates your API
                calls and is required for most requests.
            </p>
            <FigureWithCaption
                src="/img/blog/postman_blackboard/4.1_set_params.webp"
                alt="Postman Params tab with only the grant_type parameter selected and set to client_credentials."
                caption="Postman Params tab with only the grant_type parameter selected and set to client_credentials."
            />
            <ol>
                <li>
                    <p>
                        Make sure <strong>Blackboard Auth</strong> is selected
                        in the environment dropdown (top-right).
                    </p>
                </li>
                <li>
                    <p>
                        In the <strong>Collections</strong> tab, go to:
                        <br />
                        <code>
                            Learn APIs &gt; learn &gt; api &gt; public &gt; v1
                            &gt; oauth2 &gt; token &gt; Request Token
                        </code>
                    </p>
                </li>
                <li>
                    <p>
                        Select the <strong>Params</strong> tab:
                    </p>
                    <ol>
                        <li>
                            Deselect all parameters except for{" "}
                            <code>grant_type</code>
                        </li>
                        <li>
                            Set <code>grant_type</code> to{" "}
                            <code>client_credentials</code>
                        </li>
                    </ol>
                </li>
            </ol>
            <FigureWithCaption
                src="/img/blog/postman_blackboard/4.4_set_scripts.webp"
                alt="Postman Tests tab showing a script that saves the access token to an environment variable."
                caption="Postman Tests tab showing a script that saves the access token to an environment variable."
            />
            <ol start={4}>
                <li>
                    <p>
                        Go to the <strong>Authorization</strong> tab:
                    </p>
                    <ul>
                        <li>
                            <strong>Type:</strong> Basic Auth
                        </li>
                        <li>
                            <strong>Username:</strong>{" "}
                            <code>
                                &#123;&#123;basicAuthUsername&#125;&#125;
                            </code>
                        </li>
                        <li>
                            <strong>Password:</strong>{" "}
                            <code>
                                &#123;&#123;basicAuthPassword&#125;&#125;
                            </code>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        Go to the <strong>Headers</strong> tab and change the
                        existing header to:
                    </p>
                    <ul>
                        <li>
                            <strong>Key:</strong> <code>Content-Type</code>
                        </li>
                        <li>
                            <strong>Value:</strong>{" "}
                            <code>application/x-www-form-urlencoded</code>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        Go to the <strong>Scripts</strong> tab (may be labelled
                        &quot;Tests&quot; or &quot;Post-response&quot;):
                    </p>
                    <ul>
                        <li>Paste the following script:</li>
                    </ul>
                    <pre>
                        <code className="language-javascript">{jwtScript}</code>
                    </pre>
                </li>
                <li>
                    <p>
                        Click <strong>Send</strong> (or press{" "}
                        <code>Command + Enter</code>) to retrieve your access
                        token.
                    </p>
                </li>
            </ol>
            <hr />
            <h2>Step 5: Add the Access Token to All API Requests</h2>
            <FigureWithCaption
                src="/img/blog/postman_blackboard/5.1_set_access_token.webp"
                alt="Postman Collection-level Authorization tab set to API Key with Authorization as the header key."
                caption="Postman Collection-level Authorization tab set to API Key with Authorization as the header key."
            />
            <ol>
                <li>
                    In the <strong>Collections</strong> tab, click on{" "}
                    <strong>Learn APIs</strong> (at the top level).
                </li>
                <li>
                    Select the <strong>Authorization</strong> tab.
                </li>
                <li>
                    Change the following settings:
                    <ul>
                        <li>
                            <strong>Auth Type:</strong> <code>API Key</code>
                        </li>
                        <li>
                            <strong>Key:</strong> <code>Authorization</code>
                        </li>
                        <li>
                            <strong>Value:</strong>{" "}
                            <code>&#123;&#123;apiKey&#125;&#125;</code>
                        </li>
                        <li>
                            <strong>Add to:</strong> <code>Header</code>
                        </li>
                    </ul>
                </li>
                <li>
                    Click <strong>Save</strong> (or press{" "}
                    <code>Command + S</code>).
                </li>
            </ol>
            <p>
                All requests in the collection will now use your access token
                automatically.
            </p>
            <blockquote>
                <p>
                    <strong>Tip:</strong> Some individual requests may still
                    have old parameters set by default. If you get errors, check
                    the <strong>Params</strong> tab and uncheck or delete any
                    unnecessary ones.
                </p>
            </blockquote>
            <p>You&apos;re now ready to explore Blackboard&apos;s Learn API.</p>
            <h2>Step 6: Make a Simple API Call</h2>
            <p>
                Let&apos;s test the setup with a basic GET request to list
                users.
            </p>
            <ol>
                <li>
                    In the <strong>Collections</strong> tab, navigate to:
                    <br />
                    <code>
                        Learn APIs &gt; learn &gt; api &gt; public &gt; v1 &gt;
                        users &gt; Get Users
                    </code>
                </li>
                <li>
                    Click on the request and make sure:
                    <ul>
                        <li>
                            The <strong>Authorization</strong> is inherited from
                            the collection
                        </li>
                        <li>There are no unnecessary parameters selected</li>
                    </ul>
                </li>
                <li>
                    Click <strong>Send</strong>.
                </li>
            </ol>
            <p>You should receive a JSON response containing user records.</p>
            <p>
                If you receive a 401 error, double-check that your access token
                has been saved and that it&apos;s correctly set under the
                collection&apos;s <strong>Authorization</strong> tab.
            </p>
            <h2>Troubleshooting</h2>
            <p>Here are some common issues and how to fix them:</p>
            <ul>
                <li>
                    <p>
                        <strong>401 Unauthorized</strong>:
                    </p>
                    <ul>
                        <li>
                            Check your <code>client_credentials</code> (client
                            ID and secret)
                        </li>
                        <li>Make sure the token request succeeded</li>
                        <li>
                            Confirm the token is included in the header (check
                            the &quot;Authorization&quot; tab is set to
                            &quot;Bearer Token&quot; and using the correct
                            variable)
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong>400 Bad Request</strong>:
                    </p>
                    <ul>
                        <li>
                            <p>
                                This often happens if unused parameters are
                                still selected in the request.
                            </p>
                        </li>
                        <li>
                            <p>
                                For example, when testing{" "}
                                <code>GET /users</code>, if parameters like{" "}
                                <code>dataSourceId</code> are left checked and
                                contain placeholder or junk values, Blackboard
                                will reject the request with a <code>400</code>{" "}
                                error and a verbose message like:
                            </p>
                            <pre>
                                <code className="language-json">
                                    {fourHundredResponse}
                                </code>
                            </pre>
                        </li>
                        <li>
                            <p>
                                Solution: go to the <strong>Params</strong> tab
                                and deselect or delete any unnecessary
                                parameters before sending the request.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong>Empty or unexpected responses</strong>:
                    </p>
                    <ul>
                        <li>
                            Your Learn environment may not contain any users or
                            courses yet.
                        </li>
                        <li>
                            Try calling a different endpoint or inspecting the
                            full JSON response for pagination info.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong>Token not saving or reused</strong>:
                    </p>
                    <ul>
                        <li>
                            Ensure your token save script (under the{" "}
                            <strong>Tests</strong> tab) is error-free and
                            includes the <code>Bearer</code> prefix.
                        </li>
                        <li>
                            Check your Collection-level{" "}
                            <strong>Authorization</strong> settings are set to
                            inherit the token from the environment variable (for
                            example,{" "}
                            <code>&#123;&#123; token &#125;&#125;</code>).
                        </li>
                    </ul>
                </li>
            </ul>
            <h2>Summary</h2>
            <p>You&apos;ve now:</p>
            <ul>
                <li>
                    Imported Blackboard&apos;s Learn API (Swagger file) into
                    Postman
                </li>
                <li>Set up a Postman environment for OAuth2 authentication</li>
                <li>
                    Retrieved an access token using the{" "}
                    <code>client_credentials</code> grant type
                </li>
                <li>
                    Configured all API requests to use your token automatically
                </li>
                <li>Made your first successful API request</li>
            </ul>
            <p>
                From here, you can explore other endpoints to manage users,
                courses, announcements, enrolments, and more. If you&apos;re
                working in an institutional context, be sure to follow data
                protection policies when experimenting with real user data.
            </p>
            <p>Happy exploring!</p>
            <p>— Karl</p>
        </BlogLayout>
    );
}
