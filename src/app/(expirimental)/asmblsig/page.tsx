"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function TemplateGenerator() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [template, setTemplate] = useState("");

  useEffect(() => {
    const updatedTemplate = `
<table
  cellpadding="0"
  cellspacing="0"
  class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
  style="
    vertical-align: -webkit-baseline-middle;
    font-size: medium;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  "
>
  <tbody>
    <tr>
      <td>
        <table
          cellpadding="0"
          cellspacing="0"
          class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
          style="
            vertical-align: -webkit-baseline-middle;
            font-size: medium;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          "
        >
          <tbody>
            <tr>
              <td width="150" style="vertical-align: middle">
                <span
                  class="template3__ImageContainer-sc-vj949k-0 jeScQV"
                  style="margin-right: 20px; display: block"
                  ><img
                    src="https://cdn.prod.website-files.com/672908437571299747060384/67509f992ba898d72513a5aa_ASMBL-email-logo.png"
                    role="presentation"
                    width="130"
                    class="image__StyledImage-sc-hupvqm-0 gYgOut"
                    style="max-width: 130px"
                /></span>
              </td>
              <td style="vertical-align: middle">
                <h2
                  color="#010042"
                  class="name__NameContainer-sc-1m457h3-0 jxbGUj"
                  style="
                    margin: 0px;
                    font-size: 18px;
                    color: #010042;
                    font-weight: 600;
                  "
                >
                  <span>${name || "[name]"}</span>
                </h2>
                <p
                  color="#F84928"
                  font-size="medium"
                  class="job-title__Container-sc-1hmtp73-0 ifJNJc"
                  style="
                    margin: 0px;
                    color: #F84928;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 22px;
                  "
                >
                  <span>${title || "[title]"}</span>
                </p>
                <a
                  href="tel:+1-425-208-2997"
                  color="#010042"
                  class="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU"
                  style="text-decoration: none; color: #010042; font-size: 14px"
                  ><span>${phone || "[phone]"}</span></a
                >
                <p
                  color="#010042"
                  font-size="medium"
                  class="job-title__Container-sc-1hmtp73-0 ifJNJc"
                  style="
                    margin: 0px;
                    color: #010042;
                    font-size: 14px;
                    line-height: 22px;
                  "
                >
                  <a
                    href="https://hubs.li/Q020fdyH0"
                    color="#010042B"
                    class="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU"
                    style="
                      text-decoration: none;
                      color: #010042;
                      font-size: 14px;
                    "
                    ><span>asmbl.digital</span></a
                  >
                </p>
                <p
                  color="#010042"
                  font-size="medium"
                  class="job-title__Container-sc-1hmtp73-0 ifJNJc"
                  style="
                    margin: 0px;
                    color: #010042;
                    font-size: 14px;
                    line-height: 22px;
                  "
                >
                  <span>We build to last.</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
    `.trim();
    setTemplate(updatedTemplate);
  }, [name, title, phone]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(template).then(
      () => {
        alert("Template copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      },
    );
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <div className="space-y-4">
          <Label>Live Preview</Label>
          <div
            className="rounded-md border p-4"
            dangerouslySetInnerHTML={{ __html: template }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="template">HTML Template</Label>
        <Textarea
          id="template"
          value={template}
          readOnly
          rows={50}
          className="font-mono text-sm"
        />
        <Button onClick={copyToClipboard}>Copy Template</Button>
      </div>
    </div>
  );
}
