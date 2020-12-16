import { Type } from "class-transformer";
import { Column, Entity } from "../../../core/platform/services/database/services/orm/decorators";
import { ChannelMemberNotificationLevel } from "../../../services/channels/types";

@Entity("channel_members_notification_preferences", {
  primaryKey: [["company_id", "channel_id"], "user_id"],
  type: "channel_members_notification_preferences",
})
export class ChannelMemberNotificationPreference {
  /**
   * Primary key / Partition key
   */
  @Type(() => String)
  @Column("user_id", "uuid")
  user_id: string;

  /**
   * Primary key
   */
  @Type(() => String)
  @Column("company_id", "uuid")
  company_id: string;

  /**
   * Primary key
   */
  @Type(() => String)
  @Column("channel_id", "uuid")
  channel_id: string;

  @Type(() => String)
  @Column("preferences", "string")
  preferences: ChannelMemberNotificationLevel = ChannelMemberNotificationLevel.ALL;

  @Column("last_read", "number")
  last_read = 0;
}

export type ChannelMemberNotificationPreferencePrimaryKey = Pick<
  ChannelMemberNotificationPreference,
  "company_id" | "channel_id" | "user_id"
>;